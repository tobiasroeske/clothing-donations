create table "public"."donations" (
    "id" uuid not null default uuid_generate_v4(),
    "type" text not null,
    "cloth_types" text[] not null,
    "crisis_area" text not null,
    "street" text,
    "postal_code" text,
    "location" text,
    "created_at" timestamp with time zone default timezone('utc'::text, now()),
    "name" text
);


alter table "public"."donations" enable row level security;

CREATE UNIQUE INDEX donations_pkey ON public.donations USING btree (id);

alter table "public"."donations" add constraint "donations_pkey" PRIMARY KEY using index "donations_pkey";

alter table "public"."donations" add constraint "donations_postal_code_check" CHECK ((char_length(postal_code) = 5)) not valid;

alter table "public"."donations" validate constraint "donations_postal_code_check";

alter table "public"."donations" add constraint "donations_type_check" CHECK ((type = ANY (ARRAY['pickup'::text, 'dropoff'::text]))) not valid;

alter table "public"."donations" validate constraint "donations_type_check";

grant delete on table "public"."donations" to "anon";

grant insert on table "public"."donations" to "anon";

grant references on table "public"."donations" to "anon";

grant select on table "public"."donations" to "anon";

grant trigger on table "public"."donations" to "anon";

grant truncate on table "public"."donations" to "anon";

grant update on table "public"."donations" to "anon";

grant delete on table "public"."donations" to "authenticated";

grant insert on table "public"."donations" to "authenticated";

grant references on table "public"."donations" to "authenticated";

grant select on table "public"."donations" to "authenticated";

grant trigger on table "public"."donations" to "authenticated";

grant truncate on table "public"."donations" to "authenticated";

grant update on table "public"."donations" to "authenticated";

grant delete on table "public"."donations" to "postgres";

grant insert on table "public"."donations" to "postgres";

grant references on table "public"."donations" to "postgres";

grant select on table "public"."donations" to "postgres";

grant trigger on table "public"."donations" to "postgres";

grant truncate on table "public"."donations" to "postgres";

grant update on table "public"."donations" to "postgres";

grant delete on table "public"."donations" to "service_role";

grant insert on table "public"."donations" to "service_role";

grant references on table "public"."donations" to "service_role";

grant select on table "public"."donations" to "service_role";

grant trigger on table "public"."donations" to "service_role";

grant truncate on table "public"."donations" to "service_role";

grant update on table "public"."donations" to "service_role";

create policy "public can insert donations"
on "public"."donations"
as permissive
for insert
to anon
with check (true);


create policy "public can read donations"
on "public"."donations"
as permissive
for select
to anon
using (true);



