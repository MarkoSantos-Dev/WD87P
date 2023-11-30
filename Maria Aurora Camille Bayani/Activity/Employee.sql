-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 30, 2023 at 05:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my-company`
--

-- --------------------------------------------------------

--
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `EmpNo` int(11) NOT NULL,
  `EmpName` varchar(100) DEFAULT NULL,
  `Job` varchar(100) DEFAULT NULL,
  `Mgr` int(11) DEFAULT NULL,
  `HireDate` datetime NOT NULL,
  `Salary` decimal(10,0) DEFAULT NULL,
  `Commission` int(11) DEFAULT NULL,
  `DeptID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`EmpNo`, `EmpName`, `Job`, `Mgr`, `HireDate`, `Salary`, `Commission`, `DeptID`) VALUES
(1001, 'Scott', 'President', NULL, '1978-01-01 00:00:00', 5000, NULL, 1001),
(1058, 'Clark', 'Manager', 1001, '1978-01-01 00:00:00', 4000, NULL, 1001),
(1059, 'Jeff', 'Manager', 1001, '1978-01-01 00:00:00', 3500, 500, 1002),
(1060, 'Marko', 'Manager', 1001, '1978-01-01 00:00:00', 4000, NULL, 1003),
(1065, 'Bryan', 'Salesman', 1060, '1979-02-04 00:00:00', 3000, 300, 1002),
(1066, 'Frauline', 'Salesman', 1060, '1978-02-08 00:00:00', 4000, 600, 1002),
(1067, 'Phylip', 'Salesman', 1060, '1978-04-15 00:00:00', 3300, 0, 1002),
(1068, 'Ejerson', 'Clerk', 1060, '1978-01-15 00:00:00', 2400, NULL, 1002),
(1069, 'Julie', 'Clerk', 1065, '1983-05-12 00:00:00', 2000, NULL, 1003),
(1070, 'Russel', 'Analyst', 1065, '1979-03-01 00:00:00', 3400, NULL, 1003),
(1071, 'Buboy', 'Analyst', 1065, '1979-03-01 00:00:00', 3600, NULL, 1003),
(1072, 'Joseph', 'Analyst', 1065, '1981-01-01 00:00:00', 3100, NULL, 1003);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`EmpNo`),
  ADD KEY `DeptID` (`DeptID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Employee`
--
ALTER TABLE `Employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`DeptID`) REFERENCES `department` (`DeptID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
