-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 26 Jun 2024 pada 04.33
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alagosay_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `admins`
--

CREATE TABLE `admins` (
  `id` int(5) NOT NULL,
  `name` varchar(200) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `no_telp` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `admins`
--

INSERT INTO `admins` (`id`, `name`, `username`, `password`, `no_telp`) VALUES
(1, 'admin_1', 'admins_1', '$2b$10$OEREPi1IN55z0R9V119MbOel1emPpUxVckjU7CGLES48wAF7zyfvO', '08882169159');

-- --------------------------------------------------------

--
-- Struktur dari tabel `contents`
--

CREATE TABLE `contents` (
  `id` int(5) NOT NULL,
  `tag_content` varchar(100) NOT NULL,
  `title_content` varchar(100) NOT NULL,
  `subtitle_content` varchar(100) NOT NULL,
  `img_content` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `contents`
--

INSERT INTO `contents` (`id`, `tag_content`, `title_content`, `subtitle_content`, `img_content`, `url`) VALUES
(1, '// Moring Kekinian', 'Subrek Dulu Gais', 'Kudu Semangat Eakk', '469d7a057749171b6691df8edce29a8b.jpeg', 'http://localhost:3001/images/Carousel/469d7a057749171b6691df8edce29a8b.jpeg'),
(2, '// Moring Ayeuna Pisan', 'Kudu Bahagia Selagi Kebahagiaan Gratis', 'Kata siapa bahagia kudu semangat? Harus semangat banget dong', '7c844c555a7a5cbcc2664b4a8e4a3a5b.jpeg', 'http://localhost:3001/images/Carousel/7c844c555a7a5cbcc2664b4a8e4a3a5b.jpeg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(5) NOT NULL,
  `photo` text NOT NULL,
  `url` text NOT NULL,
  `flavor` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `price` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `photo`, `url`, `flavor`, `description`, `price`) VALUES
(1, '0d997fda2bc67de97cb4af7c2f1e4362.jfif', 'http://localhost:3001/images/0d997fda2bc67de97cb4af7c2f1e4362.jfif', 'Keju Pedas', 'Ngeunah tapi murah', 20000),
(2, 'ac691ea3d3ab2b981141e50f3f4c8db1.jpeg', 'http://localhost:3001/images/ac691ea3d3ab2b981141e50f3f4c8db1.jpeg', 'Pedas', 'Murah tur ngeunah', 10000),
(3, '5fbfccc586c95ecee6bea5ab74d7b6f8.jpeg', 'http://localhost:3001/images/5fbfccc586c95ecee6bea5ab74d7b6f8.jpeg', 'Rumput Laut', 'Maknyuss banget', 20000);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `contents`
--
ALTER TABLE `contents`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `contents`
--
ALTER TABLE `contents`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
