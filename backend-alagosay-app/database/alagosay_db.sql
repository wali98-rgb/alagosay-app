-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Jul 2024 pada 03.46
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
(1, '// Camilan di segala kondisi', 'Jadikan momen istimewa Anda\n                                    lebih berkesan', 'Dapatkan sensasi baru dengan Alagosay, camilan favorit para remaja, wanita, dan ibu rumah tangga', '469d7a057749171b6691df8edce29a8b.jpeg', 'http://localhost:3001/images/Carousel/469d7a057749171b6691df8edce29a8b.jpeg'),
(2, '// Moring Kekinian', 'Buat Santaimu Lebih Asik', 'Moring ini hadir sebagai cemilan yang menemanimu dikala lagi santai', '7c844c555a7a5cbcc2664b4a8e4a3a5b.jpeg', 'http://localhost:3001/images/Carousel/7c844c555a7a5cbcc2664b4a8e4a3a5b.jpeg');

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
(1, '1a375812a60e7de91150d116887b0b62.jpeg', 'http://localhost:3001/images/1a375812a60e7de91150d116887b0b62.jpeg', 'Pedas', 'Moring yang dibumbui oleh cabai merah bubuk dan di campur sedemikian rupa secara merata.\r\nMoring ini memiliki berat bersih berkisar 25gr.', 20000),
(2, '35a613a103afb67911e47997977c4ca7.jpeg', 'http://localhost:3001/images/35a613a103afb67911e47997977c4ca7.jpeg', 'Pedas & Polos', 'Moring ini berisi dua rasa yaitu pedas dan original.\r\nMasing-masing moring ini memiliki berat bersih berkisar 25gr.', 25000),
(3, 'c2c65e2fd4d167594767bb707a0d82dc.jpeg', 'http://localhost:3001/images/c2c65e2fd4d167594767bb707a0d82dc.jpeg', 'Pedas Level 2', 'Moring yang dibumbui oleh cabai merah bubuk dengan takaran 2 sendok makan. Moring ini memiliki berat bersih berkisar 25gr.', 20000),
(4, '469d7a057749171b6691df8edce29a8b.jpeg', 'http://localhost:3001/images/469d7a057749171b6691df8edce29a8b.jpeg', 'Pedas Level 3', 'Moring yang dibumbui oleh cabai merah bubuk dengan takaran 3 sendok makan. Moring ini memiliki berat bersih berkisar 25gr.', 25000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `testimonies`
--

CREATE TABLE `testimonies` (
  `id` int(4) NOT NULL,
  `image_testimony` text NOT NULL,
  `url` text NOT NULL,
  `name_testimony` varchar(100) NOT NULL,
  `testimony` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `testimonies`
--

INSERT INTO `testimonies` (`id`, `image_testimony`, `url`, `name_testimony`, `testimony`) VALUES
(2, '611c9da15b836f0a0ad61ccb1d0d0ae0.jpg', 'http://localhost:3001/images/Testimony/611c9da15b836f0a0ad61ccb1d0d0ae0.jpg', 'Natasha Wilona', 'Gila produk garut emang ga pernah gagal, sekalinya ngeproduksi sesuatu joss semua'),
(4, '079fd41ed47f9c663380f1e6be3d3bfe.jpg', 'http://localhost:3001/images/Testimony/079fd41ed47f9c663380f1e6be3d3bfe.jpg', 'Ice Preechaya', 'This moring it\'s very delicious! Bravo!!'),
(7, '73ab96677d5571d5e7cce1e76a558f2c.jpeg', 'http://localhost:3001/images/Testimony/73ab96677d5571d5e7cce1e76a558f2c.jpeg', 'Zayn Malik', 'Moringnya asli, enak banget... Gada yang bisa ngalahin cita rasa ini sama apa pun.'),
(8, '331c9bc3a31eb8ae9c027084dee9c23e.jpg', 'http://localhost:3001/images/Testimony/331c9bc3a31eb8ae9c027084dee9c23e.jpg', 'Lee Sung Kyung', 'Gilaaa ini enak buangeettt, kalian harus cobain ini');

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
-- Indeks untuk tabel `testimonies`
--
ALTER TABLE `testimonies`
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
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `testimonies`
--
ALTER TABLE `testimonies`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
