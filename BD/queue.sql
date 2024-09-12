CREATE TABLE IF NOT EXISTS mydb.ibges (
  "Codigo" INT PRIMARY KEY,
  "descricacao_do_alimento" VARCHAR(255) DEFAULT NULL,
  "Categoria" VARCHAR(255) DEFAULT NULL,
  "Codigo_de_preparacao" INT DEFAULT NULL,
  "descricao_da_preparacao" VARCHAR(255) DEFAULT NULL,
  "Energia_kcal" DECIMAL(10, 2) DEFAULT NULL,
  "Proteina_g" DECIMAL(10, 2) DEFAULT NULL,
  "Lipidios_totais_g" DECIMAL(10, 2) DEFAULT NULL,
  "Carboi_drato_g" DECIMAL(10, 2) DEFAULT NULL,
  "Fibra_alimentar_total_g" DECIMAL(10, 2) DEFAULT NULL,
  "Coles_terol_mg" DECIMAL(10, 2) DEFAULT NULL,
  "AG_Satura_dos_g" DECIMAL(10, 2) DEFAULT NULL,
  "AG_Mono_g" DECIMAL(10, 2) DEFAULT NULL,
  "AG_Poli_g" DECIMAL(10, 2) DEFAULT NULL,
  "AG_Lino_leico_g" DECIMAL(10, 2) DEFAULT NULL,
  "AG_Linole_nico_g" DECIMAL(10, 2) DEFAULT NULL,
  "AG_Trans_total_g" DECIMAL(10, 2) DEFAULT NULL,
  "Acucar_total_g" DECIMAL(10, 2) DEFAULT NULL,
  "Acucar_de_adicacao_g" DECIMAL(10, 2) DEFAULT NULL,
  "Calcio_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Mag_nesio_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Man_ganes_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Fosforo_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Ferro_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Sodio_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Sodio_de_adicao_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Potas_sio_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Co_bre_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Zinco_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Sele_nio_mcg" DECIMAL(10, 2) DEFAULT NULL,
  "Reti_nol_mcg" DECIMAL(10, 2) DEFAULT NULL,
  "Vitami_na_A_RAE_mcg" DECIMAL(10, 2) DEFAULT NULL,
  "Tiami_na_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Ribofla_vina_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Niaci_na_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Niaci_na_NE_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Pirido_xina_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Coba_lami_na_mcg" DECIMAL(10, 2) DEFAULT NULL,
  "Folato_DFE_mcg" DECIMAL(10, 2) DEFAULT NULL,
  "Vitami_na_D_mcg" DECIMAL(10, 2) DEFAULT NULL,
  "Vitami_na_E_mg" DECIMAL(10, 2) DEFAULT NULL,
  "Vitami_na_C_mg" DECIMAL(10, 2) DEFAULT NULL
);

-- -----------------------------------------------------
-- Table mydb.tb_usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.tb_usuario (
  "idUsuario" SERIAL PRIMARY KEY,
  "email" VARCHAR(45) UNIQUE,
  "senha" VARCHAR(45),
  "Nome" VARCHAR(45),
  "Genero" VARCHAR(45),
  "Dieta" INT DEFAULT NULL,
  "Objetivo" INT DEFAULT NULL,
  "Peso" FLOAT DEFAULT NULL,
  "Altura" FLOAT DEFAULT NULL,
  "IMC" FLOAT DEFAULT NULL,
  "peso_ideal" FLOAT DEFAULT NULL,
  "Usuariocol" VARCHAR(45) DEFAULT NULL
);

-- -----------------------------------------------------
-- Table mydb.tb_refeicao
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.tb_refeicao (
  "idRefeicao" SERIAL PRIMARY KEY,
  "Usuario_idUsuario" INT NOT NULL REFERENCES mydb.tb_usuario("idUsuario") ON DELETE NO ACTION ON UPDATE NO ACTION,
  "data" DATE DEFAULT NULL,
  "calorias" FLOAT DEFAULT NULL,
  "periodo" INT DEFAULT NULL
);

-- -----------------------------------------------------
-- Table mydb.tb_dieta
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.tb_dieta (
  "idDieta" SERIAL PRIMARY KEY,
  "dieta" INT DEFAULT NULL,
  "objetivo" INT DEFAULT NULL,
  "texto" VARCHAR(45) DEFAULT NULL,
  "periodo" INT DEFAULT NULL
);

-- -----------------------------------------------------
-- Table mydb.ibges_has_tb_refeicao
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.ibges_has_tb_refeicao (
  "ibges_Codigo" INT NOT NULL REFERENCES mydb.ibges("Codigo") ON DELETE NO ACTION ON UPDATE NO ACTION,
  "tb_refeicao_idRefeicao" INT NOT NULL REFERENCES mydb.tb_refeicao("idRefeicao") ON DELETE NO ACTION ON UPDATE NO ACTION,
  "quantidade" FLOAT DEFAULT NULL,
  PRIMARY KEY ("ibges_Codigo", "tb_refeicao_idRefeicao")
);

-- Enable foreign key checks again
SET CONSTRAINTS ALL IMMEDIATE;
