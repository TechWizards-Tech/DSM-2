import { queryCommitRollback, query, pool } from "./connection";

async function init() {
  try {
    await queryCommitRollback(`
    DO
    $$
    BEGIN
        DROP TABLE IF EXISTS users, profiles, fields, categories, foods, products, votes, eat_foods, eat_products;

        DROP TYPE IF EXISTS enum_sex, enum_role CASCADE;

        CREATE TYPE enum_sex AS ENUM ('female', 'male');
        CREATE TYPE enum_role AS ENUM ('user', 'adm');

        CREATE TABLE users (
            id SERIAL NOT NULL,
            alias VARCHAR(30) NOT NULL,
            mail VARCHAR(50) NOT NULL,
            password VARCHAR(100) NULL,
            role enum_role NOT NULL DEFAULT 'user',
            PRIMARY KEY(id),
            CONSTRAINT users_mail_unique UNIQUE (mail)
        );

        CREATE TABLE profiles (
            id SERIAL NOT NULL,
            _user INTEGER NOT NULL,
            birth_date DATE NOT NULL,
            weight FLOAT NOT NULL,
            sex enum_sex NULL,
            PRIMARY KEY(id),
            FOREIGN KEY(_user)
                REFERENCES users(id)
                ON DELETE RESTRICT
                ON UPDATE CASCADE
        );


        
CREATE TABLE IF NOT EXISTS public.categories
(
    id serial NOT NULL,
    name character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT categories_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.diet
(
    idd serial NOT NULL,
    diet integer NOT NULL,
    objective integer NOT NULL,
    text character varying(45) COLLATE pg_catalog."default" NOT NULL,
    period integer NOT NULL,
    CONSTRAINT diet_pkey PRIMARY KEY (idd)
);

CREATE TABLE IF NOT EXISTS public.eat_foods
(
    id serial NOT NULL,
    _user integer NOT NULL,
    food integer NOT NULL,
    date date,
    quantity double precision,
    period date,
    CONSTRAINT eat_foods_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.foods
(
    id serial NOT NULL,
    category integer NOT NULL,
    description character varying(70) COLLATE pg_catalog."default",
    moisture double precision,
    energy double precision,
    protein double precision,
    lipids double precision,
    cholesterol double precision,
    carbohydrate double precision,
    dietary_fiber double precision,
    ash double precision,
    calcium double precision,
    magnesium double precision,
    manganese double precision,
    phosphorus double precision,
    iron double precision,
    sodium double precision,
    potassium double precision,
    copper double precision,
    zinc double precision,
    retinol double precision,
    re double precision,
    era double precision,
    thiamin double precision,
    riboflavin double precision,
    pyridoxine double precision,
    niacin double precision,
    vitamin_c double precision,
    CONSTRAINT foods_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.profiles
(
    id serial NOT NULL,
    _user integer NOT NULL,
    birth_date date NOT NULL,
    weight double precision NOT NULL,
    sex enum_sex,
	height double precision NOT NULL,
	ideal_weight double precision,
	diet smallint NOT NULL,
	objective smallint NOT NULL,
	CONSTRAINT profiles_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.users
(
    id serial NOT NULL,
    alias character varying(30) COLLATE pg_catalog."default" NOT NULL,
    mail character varying(50) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default",
    role enum_role NOT NULL DEFAULT 'user'::enum_role,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_mail_unique UNIQUE (mail)
);

ALTER TABLE IF EXISTS public.eat_foods
    ADD CONSTRAINT eat_foods__user_fkey FOREIGN KEY (_user)
    REFERENCES public.users (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public.eat_foods
    ADD CONSTRAINT eat_foods_food_fkey FOREIGN KEY (food)
    REFERENCES public.foods (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public.foods
    ADD CONSTRAINT foods_category_fkey FOREIGN KEY (category)
    REFERENCES public.categories (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


ALTER TABLE IF EXISTS public.profiles
    ADD CONSTRAINT profiles__user_fkey FOREIGN KEY (_user)
    REFERENCES public.users (id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE RESTRICT;


            END;
    $$;
    `);
    // Verifique se a tabela foi criada
    const result = await query(
      `SELECT table_name
        FROM information_schema.tables
        WHERE table_catalog = $1
        AND table_schema = 'public'
        AND table_type = 'BASE TABLE'`,
        [process.env.DB_NAME]
    );
    console.log("Comandos SQL submetidos ao SGBD. Tabelas:", result);
  } catch (e: any) {
    console.error("Erro ao submeter comandos SQL:", e.message);
  } finally {
    console.log("Finalizado");
    pool.end();
  }
}

init();
