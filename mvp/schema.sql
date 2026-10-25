-- MVP: pedidos del buffet con estados (nuevo -> listo -> entregado).
-- Nadie lee ni escribe la tabla directo: todo pasa por funciones.
-- El PIN del buffet se guarda en la tabla config y NO va en este archivo.

create table public.pedidos (
  id            bigint generated always as identity primary key,
  codigo        text        not null,
  token         uuid        not null default gen_random_uuid() unique,
  nombre        text        not null check (char_length(nombre) between 1 and 30),
  detalle       text        not null check (char_length(detalle) between 1 and 500),
  total         integer     not null check (total > 0 and total <= 1000000),
  estado        text        not null default 'nuevo' check (estado in ('nuevo', 'listo', 'entregado')),
  creado_at     timestamptz not null default now(),
  listo_at      timestamptz,
  entregado_at  timestamptz
);
create index pedidos_creado_at on public.pedidos (creado_at);

create table public.config (
  clave text primary key,
  valor text not null
);

alter table public.pedidos enable row level security;
alter table public.config  enable row level security;
revoke all on public.pedidos, public.config from anon, authenticated;

-- Cliente: crea el pedido y recibe un código de 3 dígitos y un token para seguirlo.
create function public.crear_pedido(p_nombre text, p_detalle text, p_total integer)
returns table (codigo text, token uuid)
language plpgsql security definer set search_path = public as $$
#variable_conflict use_column
declare
  v_codigo text;
  v_intentos int := 0;
begin
  if coalesce(trim(p_nombre), '') = '' then raise exception 'Falta el nombre'; end if;
  if coalesce(trim(p_detalle), '') = '' then raise exception 'El pedido está vacío'; end if;
  loop
    v_codigo := (100 + floor(random() * 900))::int::text;
    exit when not exists (
      select 1 from pedidos p
      where p.codigo = v_codigo and p.estado <> 'entregado' and p.creado_at > now() - interval '12 hours');
    v_intentos := v_intentos + 1;
    if v_intentos > 50 then raise exception 'No hay códigos libres'; end if;
  end loop;
  return query
    insert into pedidos (codigo, nombre, detalle, total)
    values (v_codigo, left(trim(p_nombre), 30), left(p_detalle, 500), p_total)
    returning pedidos.codigo, pedidos.token;
end $$;

-- Cliente: consulta el estado de su pedido con el token.
create function public.estado_pedido(p_token uuid)
returns table (codigo text, nombre text, detalle text, total integer, estado text)
language sql security definer set search_path = public as $$
  select p.codigo, p.nombre, p.detalle, p.total, p.estado from pedidos p where p.token = p_token;
$$;

-- Buffet: lista los pedidos de las últimas 18 horas (requiere PIN).
create function public.panel_pedidos(p_pin text)
returns table (id bigint, codigo text, nombre text, detalle text, total integer, estado text,
               creado_at timestamptz, listo_at timestamptz, entregado_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from config c where c.clave = 'pin_buffet' and c.valor = p_pin) then
    raise exception 'PIN incorrecto';
  end if;
  return query
    select p.id, p.codigo, p.nombre, p.detalle, p.total, p.estado, p.creado_at, p.listo_at, p.entregado_at
    from pedidos p where p.creado_at > now() - interval '18 hours' order by p.creado_at;
end $$;

-- Buffet: cambia el estado de un pedido (requiere PIN). Guarda la hora de cada cambio.
create function public.marcar_estado(p_pin text, p_id bigint, p_estado text)
returns void
language plpgsql security definer set search_path = public as $$
begin
  if not exists (select 1 from config c where c.clave = 'pin_buffet' and c.valor = p_pin) then
    raise exception 'PIN incorrecto';
  end if;
  if p_estado not in ('nuevo', 'listo', 'entregado') then raise exception 'Estado inválido'; end if;
  update pedidos set
    estado       = p_estado,
    listo_at     = case when p_estado = 'nuevo' then null when p_estado in ('listo', 'entregado') then coalesce(listo_at, now()) end,
    entregado_at = case when p_estado = 'entregado' then coalesce(entregado_at, now()) else null end
  where id = p_id;
end $$;

revoke all on function public.crear_pedido(text, text, integer), public.estado_pedido(uuid),
  public.panel_pedidos(text), public.marcar_estado(text, bigint, text) from public;
grant execute on function public.crear_pedido(text, text, integer), public.estado_pedido(uuid),
  public.panel_pedidos(text), public.marcar_estado(text, bigint, text) to anon, authenticated;
