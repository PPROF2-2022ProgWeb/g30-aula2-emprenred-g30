-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema emprenred
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema emprenred
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `emprenred` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `emprenred` ;

-- -----------------------------------------------------
-- Table `emprenred`.`catalogos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`catalogos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(15) NOT NULL,
  `fecha_de_baja` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`personas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`personas` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `fecha_de_baja` DATE NULL DEFAULT NULL,
  `fecha_nac` DATE NULL DEFAULT NULL,
  `localidad` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`publicaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`publicaciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(1000) NOT NULL,
  `fecha_de_alta` DATE NOT NULL,
  `fecha_de_baja` DATE NULL DEFAULT NULL,
  `imagen` VARCHAR(1000) NOT NULL,
  `persona_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_personas_publicaciones` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `fk_personas_publicaciones`
    FOREIGN KEY (`persona_id`)
    REFERENCES `emprenred`.`personas` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`comentarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(1000) NOT NULL,
  `fecha_de_baja` DATE NULL DEFAULT NULL,
  `persona_id` BIGINT NULL DEFAULT NULL,
  `publicacion_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_personas_comentarios` (`persona_id` ASC) VISIBLE,
  INDEX `fk_publicacion_comentarios` (`publicacion_id` ASC) VISIBLE,
  CONSTRAINT `fk_personas_comentarios`
    FOREIGN KEY (`persona_id`)
    REFERENCES `emprenred`.`personas` (`id`)
    ON UPDATE CASCADE,
  CONSTRAINT `fk_publicacion_comentarios`
    FOREIGN KEY (`publicacion_id`)
    REFERENCES `emprenred`.`publicaciones` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`empresas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`empresas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `domicilio` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `fecha_de_baja` DATE NULL DEFAULT NULL,
  `catalogo_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`factura` (
  `idfactura` INT NOT NULL,
  `modo_pago` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idfactura`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(100) NOT NULL,
  `precio` DECIMAL(10,0) NOT NULL,
  `fecha_de_baja` DATE NULL DEFAULT NULL,
  `catalogo_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_catalogo_productos` (`catalogo_id` ASC) VISIBLE,
  CONSTRAINT `fk_catalogo_productos`
    FOREIGN KEY (`catalogo_id`)
    REFERENCES `emprenred`.`catalogos` (`id`)
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`tipo_factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`tipo_factura` (
  `idtipo_factura` INT NOT NULL AUTO_INCREMENT,
  `id_factura` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_factura`),
  INDEX `id_factura_idx` (`id_factura` ASC) VISIBLE,
  CONSTRAINT `id_factura`
    FOREIGN KEY (`id_factura`)
    REFERENCES `emprenred`.`factura` (`idfactura`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`tipo_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`tipo_producto` (
  `idtipo_producto` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_producto`),
  INDEX `id_producto_idx` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `id_producto`
    FOREIGN KEY (`id_producto`)
    REFERENCES `emprenred`.`productos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`usuario` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `fecha_de_baja` DATE NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  `persona_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UK_863n1y3x0jalatoir4325ehal` (`username` ASC) VISIBLE,
  INDEX `FKdtio8nb0ttmr3xciurvjhwq6j` (`persona_id` ASC) VISIBLE,
  CONSTRAINT `FKdtio8nb0ttmr3xciurvjhwq6j`
    FOREIGN KEY (`persona_id`)
    REFERENCES `emprenred`.`personas` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 14
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`venta` (
  `idventa` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idventa`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`voucher`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`voucher` (
  `idvoucher` INT NOT NULL AUTO_INCREMENT,
  `id_empresa` INT NOT NULL,
  `clave` VARCHAR(45) NOT NULL,
  `cantidad` INT NOT NULL,
  `fecha_inicio` DATETIME NOT NULL,
  `fecha_final` DATETIME NOT NULL,
  PRIMARY KEY (`idvoucher`),
  INDEX `id_idx` (`id_empresa` ASC) VISIBLE,
  CONSTRAINT `id`
    FOREIGN KEY (`id_empresa`)
    REFERENCES `emprenred`.`empresas` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`voucher_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`voucher_producto` (
  `idvoucher_producto` INT NOT NULL AUTO_INCREMENT,
  `id_producto` INT NOT NULL,
  PRIMARY KEY (`idvoucher_producto`),
  INDEX `id_producto_idx` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `id_producto_voucher`
    FOREIGN KEY (`id_producto`)
    REFERENCES `emprenred`.`productos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `emprenred`.`voucher_tipo_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `emprenred`.`voucher_tipo_producto` (
  `idvoucher_tipo_producto` INT NOT NULL,
  `id_tipo_producto` INT NOT NULL,
  PRIMARY KEY (`idvoucher_tipo_producto`),
  INDEX `id_tipo_producto_idx` (`id_tipo_producto` ASC) VISIBLE,
  CONSTRAINT `id_tipo_producto`
    FOREIGN KEY (`id_tipo_producto`)
    REFERENCES `emprenred`.`tipo_producto` (`idtipo_producto`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
