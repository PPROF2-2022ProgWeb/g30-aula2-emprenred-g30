-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-11-2022 a las 02:10:27
-- Versión del servidor: 10.3.32-MariaDB
-- Versión de PHP: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ande_emprenred`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` bigint(20) NOT NULL,
  `precio` double DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `precio`, `persona_id`) VALUES
(1, 500000, 25),
(2, 500000, 26),
(28, 310000, 15),
(29, 0, 21),
(30, 530000, 37),
(31, 1000000, 38);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritos_productos`
--

CREATE TABLE `carritos_productos` (
  `carrito_id` bigint(20) NOT NULL,
  `producto_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `carritos_productos`
--

INSERT INTO `carritos_productos` (`carrito_id`, `producto_id`) VALUES
(28, 2),
(28, 2),
(28, 3),
(2, 1);

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personas`
--

INSERT INTO `personas` (`id`, `apellido`, `fecha_de_baja`, `fecha_nac`, `localidad`, `nombre`) VALUES
(1, 'Asis', NULL, '2012-04-23', 'Córdoba', 'Adelina'),
(2, 'Asis', NULL, '2012-04-22', 'Córdoba', 'Adelina'),
(3, 'Asis', NULL, '2012-04-22', 'Córdoba', 'Adelina'),
(4, 'Rebolledo', NULL, '1993-10-27', NULL, 'Felipe'),
(5, NULL, NULL, NULL, NULL, NULL),
(6, 'Asis', NULL, '2012-04-21', 'Córdoba', 'Adelina'),
(7, 'Rebolledo', NULL, '1993-10-29', NULL, 'Felipe'),
(8, 'Rebolledo', NULL, '1993-10-29', NULL, 'Felipe'),
(9, 'Rebolledo', NULL, '1993-10-29', NULL, 'Felipe'),
(10, 'Rebolledo', NULL, '1993-10-29', NULL, 'Felipe'),
(11, 'Re22', NULL, '1993-10-29', NULL, 'Felipe'),
(12, 'felipe', NULL, '2022-12-29', NULL, 'felipe'),
(13, 'Villalobos', NULL, '1993-12-03', NULL, 'Andrea'),
(14, 'aaaaaaaaaaaa', NULL, '2000-10-19', NULL, 'aaaaaaaa'),
(15, 'de EmprenRED ', NULL, NULL, 'Córdoba ', 'Administradores '),
(16, 'Prueba2', NULL, '1992-10-29', NULL, 'Prueba2'),
(17, 'Rebolledo', NULL, '1993-01-29', NULL, 'Felipe'),
(18, 'Gallardo', NULL, '1990-12-08', NULL, 'Oscar '),
(19, 'Miranda', NULL, NULL, 'Tucumán', 'Celeste'),
(20, 'Pruebudo', NULL, '0036-03-14', NULL, 'Pruebudo'),
(21, 'Chan', NULL, NULL, 'Tucumán', 'Jackie'),
(22, 'Che Guevara', NULL, '0016-01-21', 'Cordoba', 'Ernesto'),
(23, 'Bien', NULL, '1993-12-29', 'Cordoba', 'Fecha'),
(24, 'Vendedor', NULL, '0010-05-14', 'Cordoba', 'Vendedor'),
(25, 'Usuario cambiado', NULL, '0010-05-13', 'Cordoba', 'Usuario cambiado'),
(26, 'Común', NULL, '1993-10-29', 'Cordoba', 'Usuario'),
(27, 'string', '2022-11-12', '2022-11-12', 'string', 'string'),
(28, 'string', '2022-11-12', '2022-11-12', 'string', 'string'),
(29, 'Rivas', NULL, '0021-05-13', 'Córdoba', 'Virginio'),
(30, 'Luliana', NULL, '0016-03-21', 'Cordoba', 'Luli'),
(31, 'Villalobos', NULL, '0010-05-15', 'Cordoba', 'Andrea'),
(32, 'Rebolledo', NULL, '0009-03-11', 'Cordoba', 'Felipe'),
(33, 'Primo', NULL, '0014-11-14', 'Cordoba', 'Humberto'),
(34, 'Alvarez', NULL, '1960-10-09', 'Buenos Aires', 'Pity'),
(35, 'Gonzalez', NULL, NULL, 'Cordoba', 'Jorge'),
(36, 'Yorke', NULL, '1940-10-09', 'Cordoba', 'Thom'),
(37, 'Picapiedra', NULL, NULL, 'Formosa', 'Luis'),
(38, 'Rebolledo', NULL, '1993-10-29', 'Cordoba', 'Felipe');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preference_mp_venta`
--

CREATE TABLE `preference_mp_venta` (
  `id` bigint(20) NOT NULL,
  `preference_id` varchar(255) DEFAULT NULL,
  `venta_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preference_mp_venta`
--

INSERT INTO `preference_mp_venta` (`id`, `preference_id`, `venta_id`) VALUES
(1, '140920788-383103c7-96ac-4184-84b0-2b7e852a5c9d', 9),
(2, '140920788-e80e949c-cf59-4ac9-8d70-2d1829ba409a', 10),
(3, '140920788-bc06a405-00e3-4114-acf4-84f255d5d348', 11),
(4, '140920788-3c1aa2d0-c07f-4b72-865f-9f65a7542711', 12),
(5, '140920788-5c0b0e1c-011e-4d04-a836-86f518277f02', 13),
(6, '140920788-a613cfc8-181e-42dd-8883-bcb15fce475d', 14),
(7, '140920788-ee927a13-3610-49ca-b78e-c76b3eed142f', 15),
(8, '140920788-ccb30871-c21b-4313-a7a6-21a646a22eca', 16),
(9, '140920788-6f983671-35e5-4898-bb01-112945345054', 17),
(10, '140920788-3f4348ff-a7d8-4eb3-ab2b-eee92ce60ea2', 18);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `fecha_de_baja` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `stock` bigint(20) DEFAULT NULL,
  `tipo_producto_id_tipo_producto` bigint(20) DEFAULT NULL,
  `vendedor_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `descripcion`, `fecha_de_baja`, `imagen`, `nombre`, `precio`, `stock`, `tipo_producto_id_tipo_producto`, `vendedor_id`) VALUES
(1, '16GB de Ram', NULL, './assets/img/products1.png', 'Iphone X ', 500000, 107, 1, 15),
(2, 'Para café molido', NULL, './assets/img/products2.png', 'Cafetera', 30000, 0, 3, 15),
(3, '32gb de Ram - ', NULL, './assets/img/products3.png', 'Acer Predator Helios 300', 250000, 0, 2, 15),
(4, 'Usada - 2GB de Ram- Disco Duro de 500GB ', NULL, './assets/img/products4.png', 'Net Gobierno Bangho', 12000, 0, 2, 15),
(5, '4GB de Ram - Camara de 16MPX', NULL, './assets/img/products5.png', 'LG K61', 30000, 0, 1, 15),
(6, 'No incluye filtro', NULL, './assets/img/products6.png', ' Hoover Max Extract® 60 Pressure Pro™', 200000, 1, 7, 21),
(7, 'Para la aspiradora Hoover Max Extract Pressure Pro modelo 60', NULL, './assets/img/products7.png', 'Filtro de Polvo', 10, 9, 7, 21),
(8, 'Con funcion GPS', NULL, './assets/img/products8.png', 'SmartWach de Lujo', 3000000, 4, 5, 21),
(9, 'Climatizador para ambiente humedo', NULL, './assets/img/products9.png', 'Climatizador de Aire 3000', 3000000, 1, 6, 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_producto`
--

CREATE TABLE `tipo_producto` (
  `id_tipo_producto` bigint(20) NOT NULL,
  `descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_producto`
--

INSERT INTO `tipo_producto` (`id_tipo_producto`, `descripcion`) VALUES
(1, 'Celulares'),
(2, 'Computadoras'),
(3, 'Electrodomesticos'),
(4, 'Auriculares'),
(5, 'Relojes Inteligentes'),
(6, 'Climatizadores'),
(7, 'Aspiradoras'),
(8, 'Lavarropas'),
(9, 'Televisores');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` bigint(20) NOT NULL,
  `fecha_de_baja` date DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `fecha_de_baja`, `password`, `role`, `username`, `persona_id`) VALUES
(1, '2022-11-17', '$2a$10$Bf3xfmaTBG/MkFJSKGaheeA6AfI/fso9pACfDT7aFa1TJcHvt3swa', 'VENDEDOR', 'asispropiedades@gmail.com', 1),
(2, '2022-11-16', '$2a$10$fEa0kNFN0Z.NBzXW6pmsie5W.0alpy/v4q.5cA/0Mr65zO074UtGq', 'VENDEDOR', 'asis1propiedades@gmail.com', 2),
(3, '2022-11-17', '$2a$10$KgG8iydUBpfZJHfq9kHno.wZ1BYsa7DBYr5U2NqHpoaM8.hFpu0Wu', 'VENDEDOR', 'asis1propieadades@gmail.com', 3),
(4, NULL, '$2a$10$yrP6vYZBBXeYMi2Ltd8ysukTGTZOSVEYnXz17JT6XWAXydwf099ve', 'VENDEDOR', 'feliperebolledo@outlook.com', 4),
(5, NULL, '$2a$10$/lXNsvPfJ/kL/W4B7KoeW.asvEkznX9nnELLLSy3PJw3DKsDc4Pi6', 'USUARIO', 'felipe@felipe.com', 5),
(6, NULL, '$2a$10$TGOO57/QR9YBzzyLRlcqquUuaZSTPCQcpXp/dt35jZ3N.Z1Rd/1Oy', 'USUARIO', 'asis1propieadaasddes@gmail.com', 6),
(7, NULL, '$2a$10$tieen/BuGt7qxOoRd18cpOhE/0bUINYIr28TfPGOQpiQm8aJY.XVi', 'VENDEDOR', 'felipao@felipe.com', 7),
(8, NULL, '$2a$10$5fNHDM/.qlZjKwViAAsjFOqukEpdBWgPQikIvq.ouzS6PEnF2I73e', 'VENDEDOR', 'feliperebolledoxxxxxxx@outlook.com', 8),
(9, NULL, '$2a$10$F/NtTCfV.ZfO64k63lX86eWjxqHjEOEaOIWfoAvLuoLuF0JfqjHt2', 'VENDEDOR', 'feliper@feliperrr.com', 9),
(10, NULL, '$2a$10$SaCqg5xXsaOV8uJb9h6HsO54fNu9ZveMp3dZ9YfCFnnLiw7YwJpEq', 'VENDEDOR', 'feliperaaa@feliperrr.com', 10),
(11, NULL, '$2a$10$MwxM9ucVCw0TeKiBTGRg2OGjuZhOOH29TtUFbVfuV6LCigZtS/RHm', 'VENDEDOR', 'feliperebolledo@outlook.com.ar', 11),
(12, NULL, '$2a$10$JArGiq6LZBaJO6OrHrZAj.MsgRChb0Ne7uQLR1WVeflPsL4meFNT.', 'VENDEDOR', 'feliperebolledodfsdfdsf@outlook.com', 12),
(13, NULL, '$2a$10$1RjpBV5sDA7fEWGq2/pvEuzGELrE4/51yigx8suYQ4r3KZzYZ6iUa', 'VENDEDOR', 'andrea.villa.rebaza@gmail.com', 13),
(14, NULL, '$2a$10$Y7I1gYkLeOzz9AS2n3A6jOv1LSLWe9VVCGeS7lcjW6zeodvXdYu.K', 'VENDEDOR', 'andraq@com.com', 14),
(15, NULL, '$2a$10$p39Mc2rprvMYxAD4y76IOOv3hyWl8TJ..5Wm.P7fQ1Xp6M61XKtxC', 'ADMINISTRADOR', 'usuarioprueba@gmail.com', 15),
(16, NULL, '$2a$10$D8ts7PbZ9WPXqCZfbZi6D.l6h.ljLT8xl/06fYrsCoJh1wfbj9Neu', 'VENDEDOR', 'prueba2@gmail.com', 16),
(17, NULL, '$2a$10$OTXG5sYFGS9JdD.AmSVxJOMzZtR02okho5S20sdS.YQWp6Mped1P2', 'VENDEDOR', 'felipe@rebolledo.com', 17),
(18, NULL, '$2a$10$I1p139X.15Fcy/5WAS9nh.xhixSrxTSNfx86CsOycz02.5TK4Slo.', 'VENDEDOR', 'cagri@gmail.com', 18),
(19, NULL, '$2a$10$2J1kHMgHip/jmLsg.2NHnOBUkhR5iYThDaeUubJcALtfWhtrLF2G2', 'ADMINISTRADOR', 'celeste@hotmail.com', 19),
(20, NULL, '$2a$10$2xhJrvkAyYybl0gWG5V3HOFZ74Bi.uxa7cyVT4EnUI/DFK06n4PtS', 'USUARIO', 'felipe@pruebo.com', 20),
(21, NULL, '$2a$10$7WjSgzdMMZ17YUZvqjy7a.QjC5.i8Vtqmnar3wlVqNgWqQJAiSMra', 'VENDEDOR', 'jackiechan@gmail.com', 21),
(22, NULL, '$2a$10$IACN5KLpP/N9wsDqBECHYuNZJhoHJjjQcHNnmB4bS0/uKiue3h6fy', 'USUARIO', 'cheguevara@cuba.com', 22),
(23, NULL, '$2a$10$34q2D85Azks5BC2FFgj1P.dfhjrf4o94chUjHnhCU.l5iWSb041xC', 'USUARIO', 'fecha@bien.com', 23),
(24, NULL, '$2a$10$8BWOXfAyiaDY.xQNrXusEuWQ1PqKbPUstm23sQH9wqsGa9BdN76y.', 'VENDEDOR', 'vendedor@vendedor', 24),
(25, NULL, '$2a$10$USN3sbNqHaDbOkAwOy3tk.oSmhM8w6gN0gUZeB0cpiNWsGTDt5ElK', 'USUARIO', 'usuario@usuario', 25),
(26, NULL, '$2a$10$5K6dmZIJTISvcZQw8zJAkuPokjznKUnkI41DFsgTN.c2PTbWakp2K', 'USUARIO', 'usuariocomun@gmail.com', 26),
(27, NULL, '$2a$10$npHaXCHWwxtvYSGHCx4Uqe2RhzfMj.s6qQ76u1M6W8EEPhNBxoO6W', 'USUARIO', 'virginio@gmail.com', 29),
(28, NULL, '$2a$10$3biYRVC.J64Y4ZWAsvkHEOkmP2VYEwqJGHLGhMTKnApEzwA7N6aBO', 'USUARIO', 'LULI@LULI.COM', 30),
(29, NULL, '$2a$10$/idvSw.MBIuDSCBpLN95cuWozhYG64GOwaAXkbDGb72yOg9iem8cK', 'USUARIO', 'villalobos@villalobos.com', 31),
(30, NULL, '$2a$10$9szTR8F6l6uJ.Jxhx6laOe9Za9pDNpp..JEf0O29oH.RDONR23leC', 'USUARIO', 'felipe@mercado.com', 32),
(31, NULL, '$2a$10$GI0llVXNo7q01H14P6axc.rxS4COFYsJZ/1YogTQnD/OnqAlVmTBK', 'USUARIO', 'cordoba@cordoba.com', 33),
(32, NULL, '$2a$10$F5Oc5XX2CTq0CK4d3auEZOah4cv9eKtsJMiKJyqThwKAslzCoJMb6', 'USUARIO', 'pity@pity.com', 34),
(35, NULL, '$2a$10$g1gtkLWPmED5buYD0jgqqO.SMuSy.G4jOWd9h3ZBIhNoy4c91hJYi', 'USUARIO', 'jorge@gonzalez.com', 35),
(36, NULL, '$2a$10$Sn/FCbp8ucIcITZXGs3mOe4HLMCoLr0BFqS3CVfRg5Wz/DnHlydw6', 'USUARIO', 'yorke@yorke', 36),
(37, NULL, '$2a$10$b3950kGcqvE.0b3DAT.O4OgTNY7KyFudEf0rPWOiw2MuV8BZdl2ee', 'USUARIO', 'pedro@picapiedra', 37),
(38, NULL, '$2a$10$vNtO3dEkg6yQWvVclZ3cPem7cKHjR2xMlTz/7qoAY4u2zuU2hHb8O', 'USUARIO', 'felipe@cordoba.com', 38);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` bigint(20) NOT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `fecha_de_creacion` datetime(6) DEFAULT NULL,
  `precio_total` double DEFAULT NULL,
  `tipo_de_pago` varchar(255) DEFAULT NULL,
  `comprador_id` bigint(20) DEFAULT NULL,
  `vendedor_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `estado`, `fecha_de_creacion`, `precio_total`, `tipo_de_pago`, `comprador_id`, `vendedor_id`) VALUES
(2, 'CANCELADO', '2022-11-14 01:25:11.000000', 560000, 'ACORDADO_CON_VENDEDOR', 25, 15),
(3, 'CANCELADO', '2022-11-14 13:38:53.000000', 2560000, 'MERCADO_PAGO', 26, 15),
(4, 'CANCELADO', '2022-11-15 19:17:10.000000', 100199999, 'MERCADO_PAGO', 21, 21),
(5, 'CANCELADO', '2022-11-15 19:17:10.000000', 100199999, 'MERCADO_PAGO', 21, 21),
(6, 'CANCELADO', '2022-11-15 19:21:18.000000', 500000, 'ACORDADO_CON_VENDEDOR', 21, 15),
(7, 'PENDIENTE_PAGO', '2022-11-15 19:21:18.000000', 500000, 'ACORDADO_CON_VENDEDOR', 21, 15),
(8, 'CANCELADO', '2022-11-15 22:07:33.000000', 99999999, 'ACORDADO_CON_VENDEDOR', 26, 21),
(9, 'PENDIENTE_PAGO', '2022-11-16 00:28:46.000000', 500000, 'MERCADO_PAGO', 25, 15),
(10, 'REDIRECT_MP', '2022-11-16 02:09:06.000000', 500000, 'MERCADO_PAGO', 25, 15),
(11, 'REDIRECT_MP', '2022-11-16 12:37:04.000000', 30000, 'MERCADO_PAGO', 26, 15),
(12, 'REDIRECT_MP', '2022-11-16 14:12:12.000000', 250000, 'MERCADO_PAGO', 26, 15),
(13, 'REDIRECT_MP', '2022-11-16 14:19:50.000000', 12000, 'MERCADO_PAGO', 26, 15),
(14, 'CANCELADO', '2022-11-16 14:23:19.000000', 99999999, 'MERCADO_PAGO', 26, 21),
(15, 'REDIRECT_MP', '2022-11-16 14:27:36.000000', 30000, 'MERCADO_PAGO', 26, 15),
(16, 'REDIRECT_MP', '2022-11-16 19:55:06.000000', 500000, 'MERCADO_PAGO', 26, 15),
(17, 'REDIRECT_MP', '2022-11-17 19:27:12.000000', 530000, 'MERCADO_PAGO', 37, 15),
(18, 'REDIRECT_MP', '2022-11-17 19:43:35.000000', 1000000, 'MERCADO_PAGO', 38, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta_productos`
--

CREATE TABLE `venta_productos` (
  `venta_id` bigint(20) NOT NULL,
  `producto_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `venta_productos`
--

INSERT INTO `venta_productos` (`venta_id`, `producto_id`) VALUES
(2, 1),
(2, 2),
(2, 2),
(3, 1),
(3, 1),
(3, 1),
(3, 1),
(3, 1),
(3, 2),
(3, 2),
(4, 6),
(4, 7),
(5, 6),
(5, 7),
(6, 1),
(7, 1),
(8, 7),
(9, 1),
(10, 1),
(11, 2),
(12, 3),
(13, 4),
(14, 7),
(15, 2),
(16, 1),
(17, 1),
(17, 5),
(18, 1),
(18, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKnyfi6ycv1yyd19rew0oklvfqx` (`persona_id`);

--
-- Indices de la tabla `carritos_productos`
--
ALTER TABLE `carritos_productos`
  ADD KEY `FK6cw3bl58cu73u2p83gtr4j0gr` (`producto_id`),
  ADD KEY `FKr9h9evs14o8jpn51ykiilmkjq` (`carrito_id`);

--
-- Indices de la tabla `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `preference_mp_venta`
--
ALTER TABLE `preference_mp_venta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdvbyk35p4s3krxrxtsr2khcks` (`tipo_producto_id_tipo_producto`),
  ADD KEY `FK9dpipxcu6x7bm99uvh4pa96hw` (`vendedor_id`);

--
-- Indices de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  ADD PRIMARY KEY (`id_tipo_producto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_863n1y3x0jalatoir4325ehal` (`username`),
  ADD KEY `FKdtio8nb0ttmr3xciurvjhwq6j` (`persona_id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKhoenuon6vv2payjl61qpu1m47` (`comprador_id`),
  ADD KEY `FKnun9vdpqhig4up93yvc4h009m` (`vendedor_id`);

--
-- Indices de la tabla `venta_productos`
--
ALTER TABLE `venta_productos`
  ADD KEY `FKrtcgkjq6wiap00v71xntd41vj` (`producto_id`),
  ADD KEY `FKalybqs83526lyqa7xnp9hoq49` (`venta_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `personas`
--
ALTER TABLE `personas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `preference_mp_venta`
--
ALTER TABLE `preference_mp_venta`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tipo_producto`
--
ALTER TABLE `tipo_producto`
  MODIFY `id_tipo_producto` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `FKnyfi6ycv1yyd19rew0oklvfqx` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`id`);

--
-- Filtros para la tabla `carritos_productos`
--
ALTER TABLE `carritos_productos`
  ADD CONSTRAINT `FK6cw3bl58cu73u2p83gtr4j0gr` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `FKr9h9evs14o8jpn51ykiilmkjq` FOREIGN KEY (`carrito_id`) REFERENCES `carrito` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK9dpipxcu6x7bm99uvh4pa96hw` FOREIGN KEY (`vendedor_id`) REFERENCES `personas` (`id`),
  ADD CONSTRAINT `FKdvbyk35p4s3krxrxtsr2khcks` FOREIGN KEY (`tipo_producto_id_tipo_producto`) REFERENCES `tipo_producto` (`id_tipo_producto`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `FKdtio8nb0ttmr3xciurvjhwq6j` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`id`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `FKhoenuon6vv2payjl61qpu1m47` FOREIGN KEY (`comprador_id`) REFERENCES `personas` (`id`),
  ADD CONSTRAINT `FKnun9vdpqhig4up93yvc4h009m` FOREIGN KEY (`vendedor_id`) REFERENCES `personas` (`id`);

--
-- Filtros para la tabla `venta_productos`
--
ALTER TABLE `venta_productos`
  ADD CONSTRAINT `FKalybqs83526lyqa7xnp9hoq49` FOREIGN KEY (`venta_id`) REFERENCES `ventas` (`id`),
  ADD CONSTRAINT `FKrtcgkjq6wiap00v71xntd41vj` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
