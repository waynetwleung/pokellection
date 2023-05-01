SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.pokemon (
	"name" varchar NOT NULL,
	"type" varchar,
	"hp" bigint,
	"marketPrice" bigint,
	"updatedDate" varchar,
	"image" varchar
	

);

