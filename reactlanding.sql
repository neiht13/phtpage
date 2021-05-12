-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2021 at 05:15 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactlanding`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_message`
--

CREATE TABLE `contact_message` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resolved` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_message`
--

INSERT INTO `contact_message` (`id`, `name`, `phone`, `email`, `message`, `resolved`) VALUES
(1, 'thien', '0888009612', 'thien@gmail.com', 'day la tin nhan', 1),
(2, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', '3 Tháng 2\nCần Thơ', 1),
(3, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', '3 Tháng 2\nCần Thơ', 1),
(4, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', 'ada', 1),
(5, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', 'áđa', 0),
(6, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', '3 Tháng 2\nCần Thơ', 1),
(7, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', '', 0),
(8, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', '3 Tháng 2\nCần Thơ', 0),
(9, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', '3 Tháng 2\nCần Thơ', 0),
(10, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', 'âsđá', 0),
(11, 'Phan Thien', '888009612', 'thienphan9612@gmail.com', '', 0),
(12, 'Phan Thien', '0088800961', 'thienphan9612@gmail.com', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `footer`
--

CREATE TABLE `footer` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_1` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_1_content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_2` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_2_content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_3` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_3_content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_4` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_4_content` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `menu_bar`
--

CREATE TABLE `menu_bar` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menu_bar`
--

INSERT INTO `menu_bar` (`id`, `name`, `value`) VALUES
('chitiet', 'Chi Tiết', 3),
('gioithieu', 'Giới Thiệu', 1),
('lienhe', 'Liên Hệ', 4),
('sanpham', 'Sản Phẩm', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_message`
--
ALTER TABLE `contact_message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer`
--
ALTER TABLE `footer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menu_bar`
--
ALTER TABLE `menu_bar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_message`
--
ALTER TABLE `contact_message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `footer`
--
ALTER TABLE `footer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
