-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 22 apr 2025 kl 12:08
-- Serverversion: 10.4.28-MariaDB
-- PHP-version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `eshop`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'fire'),
(2, 'water'),
(3, 'grass');

-- --------------------------------------------------------

--
-- Tabellstruktur `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(100) NOT NULL,
  `stock` tinyint(1) NOT NULL DEFAULT 1,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(300) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumpning av Data i tabell `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `stock`, `price`, `image`, `created_at`, `category_id`) VALUES
(1, 'Pikachu', 'The classic Electric-type Pokémon and Ash’s best friend. Perfect for all Pokémon fans.', 1, 129.00, 'assets/pokemon/pikachu-api-development.jpg', '2025-04-15 09:54:17', 1),
(2, 'Charizard', 'The mighty fire-breathing dragon from the first generation – a timeless favorite.', 1, 199.00, 'assets/pokemon/charizard-api-development.jpg', '2025-04-15 09:54:17', 1),
(3, 'Bulbasaur', 'A sweet and loyal Grass/Poison-type Pokémon. A wonderful start to your collection.', 1, 109.00, 'assets/pokemon/bulbasaur-api-development.jpg', '2025-04-15 09:54:17', 3),
(4, 'Squirtle', 'A charming Water-type Pokémon with a big heart – and an even bigger shell.', 1, 109.00, 'assets/pokemon/squirtle-api-development.jpg', '2025-04-15 09:54:17', 2),
(5, 'Jigglypuff', 'The adorable singer that can lull both enemies and audiences to sleep.', 1, 99.00, 'assets/pokemon/jigglypuff-api-development.jpg', '2025-04-15 09:54:17', 3),
(6, 'Eevee', 'A beloved Pokémon with multiple evolution options. Versatile and cozy.', 1, 129.00, 'assets/pokemon/eevee-api-development.jpg', '2025-04-15 09:54:17', 1),
(7, 'Gengar', 'A mischievous Ghost-type Pokémon with a mysterious smile – both cute and spooky.', 1, 149.00, 'assets/pokemon/gengar-api-development.jpg', '2025-04-15 09:54:17', 1),
(8, 'Snorlax', 'Big, sleepy, and absolutely irresistible. The ultimate cuddle Pokémon.', 1, 189.00, 'assets/pokemon/snorlax-api-development.jpg', '2025-04-15 09:54:17', 3),
(9, 'Lucario', 'A powerful and sleek Pokémon with Aura abilities. A crowd favorite.', 1, 179.00, 'assets/pokemon/lucario-api-development.jpg', '2025-04-15 09:54:17', 1),
(10, 'Mew', 'A mythical and playful Pokémon – both rare and legendary.', 1, 99.99, 'assets/pokemon/mew-api-development.jpg', '2025-04-15 09:54:17', 2);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index för tabell `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT för tabell `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restriktioner för dumpade tabeller
--

--
-- Restriktioner för tabell `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
