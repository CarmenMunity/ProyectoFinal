-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-06-2019 a las 06:19:25
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id9842923_makup`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `Id` int(5) NOT NULL,
  `Nombre` varchar(25) NOT NULL,
  `Descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`Id`, `Nombre`, `Descripcion`) VALUES
(1, 'Pestañas', 'Pelo que nace en el borde de los párpados.'),
(2, 'Rostro', 'Cara de una persona.'),
(3, 'Labial', 'Cosmético para dar color a los labios.'),
(10, 'Mascara de Pestañas', 'Cosmético usado para oscurecer, espesar, curvar y definir las pestañas. '),
(11, 'Base', 'Cosmético que se aplica directamente sobre el rostro y que contribuye a cubrir las manchas e imperfecciones; y dotar al cutis de un mejor aspecto.'),
(12, 'Ojos', 'Órgano que posibilita la visión en los animales.'),
(13, 'General', 'Es comun a todos los casos o a la mayor parte de ellos'),
(15, 'Polvos de contorno', 'Polvo de maquillaje en formato compacto de un tono un poco más oscuro que nuestra piel.'),
(18, 'Sombra de ojos', 'Cosmético que se aplica en los párpados y debajo de las cejas.'),
(19, 'Polvos sueltos', 'Cosmético que se aplica en los párpados y debajo de las cejas.'),
(20, 'Colorete', 'Cosmético, por lo general de tonos rojizos, que las mujeres se aplican en las mejillas para darse color.'),
(21, 'Iluminador', 'Es un producto que contiene partículas que atraen a la luz, de manera que la piel se ve notablemente más luminosa y llena de vida.'),
(22, 'Mascarilla de tela', 'Sustancia que se aplica formando una capa sobre la cara o el pelo y se deja actuar durante un corto espacio de tiempo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `Id` int(5) NOT NULL,
  `Usuario` int(5) NOT NULL,
  `Entrada` int(5) NOT NULL,
  `Fecha` date NOT NULL,
  `Descripcion` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrada`
--

CREATE TABLE `entrada` (
  `Id` int(5) NOT NULL,
  `Titulo` varchar(140) NOT NULL,
  `Descripcion` varchar(1500) NOT NULL,
  `Imagen` varchar(500) NOT NULL,
  `Usuario` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `entrada`
--

INSERT INTO `entrada` (`Id`, `Titulo`, `Descripcion`, `Imagen`, `Usuario`) VALUES
(1, 'El mejor método para aplicar mascara de pestañas', 'Un truco excelente para dar volumen a las pestañas: al aplicar la segunda capa, mueve el cepillo de un lado a otro solo en la raíz, casi creando un efecto de cardado. Esto crea un efecto \'eyeline\'r que intensifica la mirada al instante.', 'assets\\img\\entrada-pestanas.jpeg', 3),
(2, 'Consigue unos labios más gruesos', 'Para ello necesitaremos dos delineadores de labios, uno clarito y otro más oscuro. Con el clarito perfilaremos los labios y los rellenaremos y a continuación usaremos el perfilador oscuro que nos servirá para intensificar tanto las esquinas externas como las comisuras de los labios o el arco de Cupido, sutilmente se irá difuminando hacia el interior y así se mezclarán los dos tonos.\r\n\r\nEl tono oscuro se evitará aplicar en el centro del labio, de hecho para un efecto más carnososo se aplicará una sombra clarita, así se consigue una sensación de más volumen, digamos que es la misma técnica del rostro llevada a los labios.\r\n\r\nPara las más atrevidas y que busquen un resultado mucho más dramático pueden intensificar mucho más los bordes y añadir más claridad en el centro.', 'assets\\img\\overline.jpg', 3),
(3, ' La nueva técnica de maquillaje para rejuvenecer', 'Esta técnica de maquillaje es conseguir un efecto muy natural y luminoso marcando las facciones de forma casi invisible que hace que parezcas más joven.', 'assets\\img\\bb-cream.jpg', 7),
(4, 'Diferentes formas de aplicar mascara de pestañas', 'Distintas maneras de aplicar la máscara de pestaña según el efecto que queramos conseguir en nuestra mirada, dependiendo si las queremos más separadas, con más volumen o más gruesas.', 'assets\\img\\mascara-de-pestanas.jpg', 1),
(5, 'Un  maquillaje natural', 'Para obtener un aspecto de la piel muy fino y natural, de forma que apenas se aprecie que una persona lleva maquillaje puesto', 'assets\\img\\cc.jpg', 8),
(6, 'Como conseguir un strobing perfecto', 'En lugar de marcar las sombras, lo que se hace es procurar acentuar los lugares que capturan más la luz como, por ejemplo, el arco de cupido sobre los labios, la frente en la zona alta de las sienes, la parte superior de los pómulos y la barbilla.', 'assets\\img\\strobing.jpg', 10),
(7, 'Baking para pieles grasas', 'Para decir adiós a los brillos de una vez por todas\r\nSIN BRILLOS\r\nEsta base de maquillaje reduce el brillo en la superficie de la piel, ayuda a absorber el exceso de grasa y minimiza el aspecto de las imperfecciones. Se puede pedir más?   \r\nLa fórmula se transforma en polvo en la piel y matifica el rostro en tiempo récord. Además, la textura permite una aplicación fácil. Si quieres lucir la piel suave como el terciopelo, es tu cosmético.', 'assets\\img\\lakim.jpg', 4),
(8, 'Como cubrir acné, manchas y cicatrices', 'El truco de la brocha\r\nSe puede aplicar el corrector directamente con el dedo, esto te interesa. recomiendo el uso de una brocha “del tamaño adecuado al tamaño de la imperfección que vayamos a cubrir”, afirma. Y es que esto nos permitirá ser más precisos a la hora de cubrir la imperfección con el corrector. “Es importante hacer aplicaciones sutiles y lo más imperceptibles posible”.\r\n¿El corrector se usa antes o después de aplicar la base?\r\nOtra pregunta recurrente cuando se trata de cubrir un grano. ¿El corrector se aplica antes o después de la base? Depende. Depende de las preferencias personales y del tipo de base que uses. Como norma general puedes usarlo tanto antes como después de la base, pero si la base que quieres usar es fluida y ligera, Noemí Nohales, autora de nuestros BeauTV, nos recomienda usar el corrector después. “Dada la ligereza de la base, al aplicar después el corrector tenemos la libertad de poner una segunda capa de corrector si lo necesitamos. Eso sí, sin recargar\", afirma.\r\nY si el granito es grande o tiene bastante volumen….\r\nEntonces entra en juego una técnica algo más complicada, pero efectiva. Nos la explica David Molina, que recomienda utilizar un corrector verde antes de aplicar la base “para así anular el color rojizo del granito”. Después habría que aplicar la base y seguidamente un corrector de camuflaje en el mismo tono de nuestra piel. “Con esto conseguiremos un efecto óptico que unifica”, explica. Es importante saber que no quitaremos el vo', 'assets\\img\\base.jpg', 2),
(9, 'Trucos de maquillaje que harán tus ojos más grandes', 'Para lograrlo, debes aplicar alguno de estos tips de maquillaje que te aseguran agrandar tus ojos en tiempo récord. ¡Ya no hay pretextos para no intentarlo!\r\n\r\nDELINEADOR CLARO\r\nNo necesariamente tiene que ser blanco, pero sí de un tono claro para que la luz logre hacer la ilusión de unos ojos más abiertos.\r\n\r\nDelínea dentro del ojo en la parte inferior de la ceja y un poco en el lagrimal (busca difuminar bien para mejor efecto) .\r\n\r\nMUCHO RÍMEL\r\nPara que tus ojos se vean más grandes con maquillaje debes buscar que todos los elementos de tu mirada tengan armonía.', 'assets\\img\\eyerline.jpg', 4),
(10, 'Unas pestañas de impacto', 'Usa enchinador Unas pestañas levantadas siempre son un acierto, por eso no te olvides de la herramienta estrella: el enchinador. Colócalo en la raíz y aprieta ligeramente tres veces, ¡ojo! sin hacer mucha presión; repite este procedimiento en medios y puntas para darle un efecto mucho más natural y continuo. Si tienes pestañas rebeldes y el enchinador no es suficiente intenta calentarlo previamente con un encendedor. aplica polvo traslúcido\r\nAntes de la mascara, aplica un poco de polvo traslúcido con un cepillito para cejas, de esta forma estarás dándole mucho más volumen a las pestañas y no, no deja residuos ni quedarán blancas.\r\nNo tengas miedo de aplicar muchas capas, tres para ser exactas. Lo único que debes de tomar en cuenta es que hay que esperar unos segundos para aplicar la siguiente, así evitarás la posibilidad de aparición de grumos.', 'assets\\img\\Eyeliner-Organic.jpg', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `Id` int(5) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Descripcion` varchar(1000) NOT NULL,
  `Genero` varchar(25) NOT NULL,
  `Ingredientes` varchar(2000) NOT NULL,
  `Marca` varchar(35) NOT NULL,
  `Categoria` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`Id`, `Nombre`, `Descripcion`, `Genero`, `Ingredientes`, `Marca`, `Categoria`) VALUES
(1, ' BECCA x Khloé Kardashian & Malika Haqq Bronze, Bl', 'Una paleta de polvos para el rostro muy fáciles de usar que aporta un acabado de filtro fotográfico, pero en la vida real. Viene con nuestro nuevo iluminador de acabado suave, nuestro flamante bronceador satinado mate y dos nuevos tonos de nuestro favorito, el colorete iluminador. Inspirada en el efecto difuminado de los filtros fotográficos, su fórmula satinada de cobertura media cuenta con pigmentos nacarados que suavizan la textura de la piel y reflejan la luz. Su textura es tan ligera que en un momento le da a la piel un acabado satinado que disimula cualquier imperfección. ¡Para que brilles con luz propia!', 'Maquillaje', 'Radiant Blush / Soft Focus Highlighter Ingredients: Talc, Caprylic/Capric Triglyceride, Dimethicone, Octyldodecyl Stearoyl Stearate, Zea Mays (Corn) Starch, Diisostearyl Malate, Polysorbate 20, Sorbitan Stearate, Isostearyl Neopentanoate, Magnesium Aluminum Silicate, Nylon-12, Aluminum Starch Octenylsuccinate, Isopropyl Palmitate, Sodium Hyaluronate, Tocopheryl Acetate, Tin Oxide, Simmondsia Chinensis (Jojoba) Seed Oil, Ethylhexyl Methoxycinnamate, Synthetic Fluorphlogopite, Calcium Aluminum Borosilicate, Silica, Phenoxyethanol, Sodium Dehydroacetate, [+/- Mica, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491), Iron Oxides (CI 77492), Ultramarines (CI 77007), Red 7 (CI 15850), Iron Oxides (CI 77499)] . Satin Matte Bronzer Ingredients: Talc, Nylon-12, Caprylic/Capric Triglyceride, Isostearyl Sebacate, Diisostearyl Malate, Pentaerythrityl Tetraisostearate, Magnesium Aluminum Silicate, Diethylhexyl Sodium Sulfosuccinate, Lauroyl Lysine, Disodium Stearoyl Glutamate, Glyceryl Stearate, Aluminum Hydroxide, PEG-75 Stearate, Vp/Eicosene Copolymer, Maltodextrin, Sucrose Dilaurate, Sodium Cocoyl Glutamate, Pisum Sativum (Pea) Extract, Phenoxyethanol, Sodium Dehydroacetate, [+/- Mica, Iron Oxides (CI 77492), Iron Oxides (CI 77499), Titanium Dioxide (CI 77891), Iron Oxides (CI 77491), Chromium Oxide Greens (CI 77288), Bismuth Oxychloride (CI 77163), Yellow 5 Lake (CI 19140), Chromium Hydroxide Green (CI 77289), Red 40 Lake (CI 16035), Manganese Violet (CI 77742), Bronze Powder (CI 77400), Blue 1 Lake (CI 42090), Ultramarines (CI 77007), Ferric Ferrocyanide (CI 77510), Carmine (CI 75470), Aluminum Powder (CI 77000)] ', 'BECCA', 21),
(2, 'Máscara de Pestañas I Love Extreme', 'Consigue un volumen espectacular con su mega cepillo.', 'Maquillaje', 'GREDIENTS: AQUA (WATER), PARAFFIN, GLYCERYL STEARATE, SYNTHETIC BEESWAX, STEARIC ACID, ACACIA SENEGAL GUM, BUTYLENE GLYCOL, PALMITIC ACID, ORYZA SATIVA (RICE) CERA, POLYBUTENE, VP/EICOSENE COPOLYMER, OZOKERITE, AMINOMETHYL PROPANOL, TROPOLONE, HYDROGENATED VEGETABLE OIL, STEARYL STEARATE, HYDROXYETHYLCELLULOSE, PHENOXYETHANOL, CI 77491, CI 77499 (IRON OXIDES), CI 77891 (TITANIUM DIOXIDE).', 'Essence', 10),
(3, 'I Am Real Tomato Mask Sheet ', 'Ilumina la tez y la hidrata y suaviza gracias al extracto natural de tomate.', 'Cuidado', 'Water, Glycerin, Glycereth-26, Butylene Glycol, PEG/PPG-17/6 Copolymer, Bis-Ethoxydiglycol Succinate, Panthenol, Allantoin, PEG-60 Hydrogenated Castor Oil, Chlorphenesin, Carbomer, Phenoxyethanol, Tromethamine, Solanum Lycopersicum (Tomato) Fruit Extract, 1,2-Hexanediol, Propanediol, Hydroxyethylcellulose, Honey Extract, Prunus Persica (Peach) Fruit Extract, Caprylyl Glycol, Illicium Verum (Anise) Fruit Extract, Disodium EDTA, Fragrance', 'Tony Moly', 22),
(4, 'BB CREAM HYPO BELL ', 'BB Cream hipoalergénica que unifica el tono de la piel. Con Vitamina E. Indicada para pieles sensibles.', 'Maquillaje', 'Aqua (Water) • Cyclopentasiloxane • Cyclohexasiloxane • PEG/PPG-18/18 Dimethicone • Glycerin • Titanium Dioxide (nano) • Zinc Oxide • Sodium Chloride • Dimethicone Crosspolymer • Stearoyl Inulin • Silica • C30-45 Alkyl Methicone • C30-45 Olefin • Acrylates/Dimethicone Copolymer • Polysorbate 80 • PEG-10 Dimethicone • Propylene Glycol • Tocopheryl Acetate • Panax Ginseng Root Extract • Tilia Cordata Wood Extract • Aesculus Hippocastanum (Horse Chestnut) Seed Extract • Hydrolyzed Wheat Protein • Mannitol • Melanin • Glycogen • Faex Extract (Yeast Extract) • Biotin • Calcium Pantothenate • Ethylhexylglycerin • Pentylene Glycol • Triethoxycaprylylsilane • Trimethoxycaprylylsilane • Dimethicone • Hydrogen Dimethicone • Aluminum Hydroxide • Hydrated Silica • Mica • Phenoxyethanol • Chlorphenesin • Methylparaben • Tin Oxide • CI 77491, CI 77492, CI 77499 (Iron Oxides) • CI 77891 (Titanium Dioxide)', 'Bell', 2),
(7, ' Polvos sueltos Magic Star', 'Un increible polvo ultra fino, suave y lujoso.\r\n\r\nSu formula contiene Vitamina C, E y una mezcla especial de minerales que te ayudaran a controlar la producción de grasa y te mantendrán impecable todo el día. \r\n\r\nDisponible en 8 impresionantes tonos.\r\n\r\nTopaz: tonos de piel claros y medios con subtonos neutros.\r\n\r\nVegan.\r\nCruelty-Free.', 'Maquillaje', 'Mica, Talc, Silica, Boron Nitride, Kaolin, Polylactic Acid, Copernicia Cerifera (Carnauba) Wax, Glyceryl Caprylate, Methicone, Maltol, Polyquaternium-80, Didecyldimonium Chloride, Tocopheryl Acetate, Ascorbyl Palmitate. May Contain + / -: Iron Oxides (CI 77491, CI 77492, CI 77499).', 'Jeffree Star Cosmetics', 19);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnica`
--

CREATE TABLE `tecnica` (
  `Id` int(5) NOT NULL,
  `Nombre` varchar(35) NOT NULL,
  `Descripcion` varchar(500) NOT NULL,
  `Categoria` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tecnica`
--

INSERT INTO `tecnica` (`Id`, `Nombre`, `Descripcion`, `Categoria`) VALUES
(1, 'ZigZag', 'Aplicar las mascara de pestañas es en zig-zag comenzando desde la raíz hasta las puntas. Además, para evitar los grumos, los especialistas recomiendan aplicar una capa y antes de que ésta se seque, dar otra pasada.', 10),
(4, 'Whisking', 'Consiste en mezclar dos cosmeticos para crear un tercer cosmetico multiuso', 13),
(6, 'Draping', 'Contornear con el colorete.', 20),
(7, 'Contouring', 'Trata de realzar las formas del rostro de la persona, por ejemplo, la nariz, los pómulos, la frente o la barbilla.', 15),
(8, 'Baking', 'Aplicación de una gran cantidad de polvos de maquillaje translúcidos sobre el corrector en crema que se ha utilizado previamente sobre determinadas zonas del rostro con el objetivo de que este corrector termine por \"cocinarse o cocerse\".', 19),
(9, 'Cut Crease', 'Es un corte sobre las sombras de ojos en la cuenca con un producto en crema.', 12),
(10, 'Strobing', 'Aplicación de un iluminador para resaltar y dar luz a aquellas zonas del rostro que lo requieran.', 21),
(17, 'Over Line', 'Pintar por fuera de la linea de los labios para hacerlos lucir más gruesos.', 3),
(18, 'Base de maquillaje', 'Un tratamiento de base precioso que empareja la tez, la ilumina, y gracias a una fórmula con ingredientes activos hidratantes y antioxidantes, apaga la sed de la piel con una ola de hidratación y vitalidad. Maquillaje impecable, ligero y fluido, se mezcla suavemente con la piel, dejando tu cara radiante y perfecta. Su fórmula especial de aceite en agua proporciona una cobertura de mezcla y da una sensación instantánea de frescura, flexibilidad y bienestar. La tez aparece instantáneamente brillan', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo`
--

CREATE TABLE `tipo` (
  `Id` int(5) NOT NULL,
  `Entrada` int(5) NOT NULL,
  `Producto` int(5) NOT NULL,
  `Tecnica` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo`
--

INSERT INTO `tipo` (`Id`, `Entrada`, `Producto`, `Tecnica`) VALUES
(1, 1, 2, 1),
(4, 5, 4, 0),
(5, 2, 0, 17),
(6, 3, 0, 7),
(7, 4, 1, 0),
(8, 6, 0, 10),
(9, 7, 0, 8),
(10, 8, 3, 0),
(11, 9, 0, 1),
(12, 10, 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id` int(5) NOT NULL,
  `Nombre` varchar(32) NOT NULL,
  `Apellidos` varchar(64) NOT NULL,
  `Email` varchar(140) NOT NULL,
  `Imagen` varchar(500) DEFAULT NULL,
  `Perfil` varchar(20) NOT NULL,
  `Pass` varchar(20) NOT NULL,
  `UserName` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id`, `Nombre`, `Apellidos`, `Email`, `Imagen`, `Perfil`, `Pass`, `UserName`) VALUES
(3, 'Carmen', 'Diaz Crespo Ruiz de Lira', 'cdcrdl@gmail.com', NULL, 'system', 'system', 'system'),
(4, 'Manolo', 'Manolez', 'Manolo@gmail.com', NULL, 'usuario', '@Manolo69', 'Manolo'),
(5, 'Manolo', 'Manolo', 'Manolo@gmail.com', NULL, 'usuario', '@Manolo69', 'Manolo'),
(6, 'Richar', 'Richez', 'noserickparecefalso@gmail.com', NULL, 'usuario', '@Richar69', 'Rick'),
(7, 'Juanxi', 'Guaperas', 'Juanxi@gmail.com', NULL, 'usuario', '@Juanxi69', 'Juanxi'),
(10, 'JoseManuel', 'Manuelez', 'Jmanu@gmail.com', NULL, 'usuario', '@JoseManuel69', 'JManu');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `valoracion`
--

CREATE TABLE `valoracion` (
  `Entrada` int(5) NOT NULL,
  `Usuario` int(5) NOT NULL,
  `Puntuacion` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Usuario` (`Usuario`),
  ADD KEY `Entrada` (`Entrada`);

--
-- Indices de la tabla `entrada`
--
ALTER TABLE `entrada`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Usuario` (`Usuario`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Categoria` (`Categoria`);

--
-- Indices de la tabla `tecnica`
--
ALTER TABLE `tecnica`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Categoria` (`Categoria`);

--
-- Indices de la tabla `tipo`
--
ALTER TABLE `tipo`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `Entrada` (`Entrada`),
  ADD KEY `Producto` (`Producto`),
  ADD KEY `Tecnica` (`Tecnica`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `valoracion`
--
ALTER TABLE `valoracion`
  ADD KEY `Entrada` (`Entrada`),
  ADD KEY `Usuario` (`Usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `entrada`
--
ALTER TABLE `entrada`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tecnica`
--
ALTER TABLE `tecnica`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `tipo`
--
ALTER TABLE `tipo`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
