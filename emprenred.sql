-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-11-2021 a las 15:16:18
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `emprenred`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogos`
--

CREATE TABLE `catalogos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(15) NOT NULL,
  `fecha_de_baja` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `fecha_de_baja` date DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL,
  `publicacion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `domicilio` varchar(100) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `fecha_de_baja` date DEFAULT NULL,
  `catalogo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE `personas` (
  `id` bigint(20) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `fecha_de_baja` date DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL,
  `localidad` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `apellido`, `fecha_de_baja`, `fecha_nac`, `localidad`, `nombre`) VALUES
(1, 'miranda', NULL, NULL, 'localidad', 'celeste'),
(2, 'miranda', NULL, NULL, 'localidad', 'celeste'),
(3, 'miranda', NULL, NULL, 'localidad', 'celeste'),
(4, 'ortiz', NULL, '2021-11-15', 'Cordoba', 'mauricio'),
(5, 'miranda', NULL, NULL, 'localidad', 'celeste'),
(6, 'ortiz', NULL, '2021-11-16', 'Cordoba', 'mauricio'),
(7, 'ortiz', NULL, '2021-11-15', 'Cordoba', 'mauricio'),
(8, 'ortiz', NULL, NULL, 'Cordoba', 'mauricio'),
(9, 'ortiz', NULL, NULL, 'Cordoba', 'mauricio'),
(10, 'ortiz', NULL, '2021-11-09', 'Cordoba', 'mauricio'),
(11, 'ortiz', NULL, '2021-11-16', 'Chaco', 'mauricio'),
(12, 'Miranda', NULL, '1986-11-23', 'Cordoba', 'Celeste'),
(13, 'gigena', NULL, '2021-10-31', 'Cordoba', 'mariana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `fecha_de_baja` date DEFAULT NULL,
  `catalogo_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(1000) NOT NULL,
  `fecha_de_alta` date NOT NULL,
  `fecha_de_baja` date DEFAULT NULL,
  `imagen` varchar(1000) NOT NULL,
  `persona_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL,
  `fecha_de_baja` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `fecha_de_baja`, `password`, `username`, `persona_id`) VALUES
(1, NULL, '$2a$10$Ozs4MKrdFti12YLH7ACWne/nIEr7EjnX.2y7uT1QqgtQ3tHBLvD52', 'cele@gmail', 1),
(2, NULL, '$2a$10$7WnhtFZlqbIRYWVQLcZlBOmkEsQxW1R8wUFKQUZ.I6vfRarG8B5Ym', 'cele2@gmail', 2),
(3, NULL, '$2a$10$jdzq5xCsmH6iGMAWTsqWQeaMCTnK3oy8eAgGk54z6lIDNleKT8Pfe', 'cele3@gmail', 3),
(4, NULL, '$2a$10$VmsuIBtNJZqkgE33V7e5RuaVwpojWv3Cf/YVpsSns/Cnvo0uxG14K', 'mraortiz.dev@gmail.com', 4),
(5, NULL, '$2a$10$hGAFR8rT.1EZGpA6p2zU0ud3BOStmEkHnBIKcOUeCdf8Y5.7xPYkq', 'cele4@gmail', 5),
(6, NULL, '$2a$10$rSUDRGYV2PJk/48E.io98ueliiWTxkY4LqskdYYaqj92tqRwPhpdS', 'mraor@gmail.com', 6),
(7, NULL, '$2a$10$EpyPMOP2pcLnFpvW1cKoLe3mb7ilBLHkiXpu8XqB9Vv4UXvUyIswK', 'mra@gmail.com', 7),
(8, NULL, '$2a$10$LFSusR9zhShVYouPKbErxuWfZRvRMfckwrTOTO.zTbSnmcyn9jZPm', 'mr@gmail.com', 8),
(9, NULL, '$2a$10$MCcN2e9XZhofAw0Xc4n7ZucD8fO/o.Tbawx6Nwhr1rJwgRLP1/4g.', 'mraortiz.dev@ail.com', 9),
(10, NULL, '$2a$10$/TxUBXJpIVqt2bUDe2FWT.Lrakz3vYIP6uEPYXlU378p46M5WlMMa', 'm@gmail.com', 10),
(11, NULL, '$2a$10$oQzd3P9wsp0tsXKYZwz8ee.pHyE8ZQRWp7FNIFwVWGJ0/2MR0JiL6', 'mama@hot.com', 11),
(12, NULL, '$2a$10$fL7zvstUTXn9XQmt0UXFy.LIYUbcG/krhiBUmXq/E3qdGy7JPI4FK', 'cele@gmail.com', 12),
(13, NULL, '$2a$10$2Ri9YlrxeOWa8ygS1B90hu58Hd5G16tNk88yNSZI3CDXTSNa51GYG', 'mariana@gmail.com', 13);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catalogos`
--
ALTER TABLE `catalogos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personas_comentarios` (`persona_id`),
  ADD KEY `fk_publicacion_comentarios` (`publicacion_id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_catalogo_productos` (`catalogo_id`);

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personas_publicaciones` (`persona_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_863n1y3x0jalatoir4325ehal` (`username`),
  ADD KEY `FKdtio8nb0ttmr3xciurvjhwq6j` (`persona_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `catalogos`
--
ALTER TABLE `catalogos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_personas_comentarios` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_publicacion_comentarios` FOREIGN KEY (`publicacion_id`) REFERENCES `publicaciones` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_catalogo_productos` FOREIGN KEY (`catalogo_id`) REFERENCES `catalogos` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD CONSTRAINT `fk_personas_publicaciones` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FKdtio8nb0ttmr3xciurvjhwq6j` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
