-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 04:17 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quackquack`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `DeptID` int(11) NOT NULL,
  `DeptName` varchar(255) NOT NULL,
  `Location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`DeptID`, `DeptName`, `Location`) VALUES
(1001, 'Executive', 'BGC'),
(1002, 'HR', 'Mandaluyong'),
(1003, 'IT', 'Bulacan'),
(1004, 'Sales', 'Y Ami'),
(1005, 'Marketing', 'Jolo');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `EmpNo` int(11) NOT NULL,
  `EmpName` varchar(255) DEFAULT NULL,
  `Job` varchar(255) DEFAULT NULL,
  `Mgr` int(11) DEFAULT NULL,
  `HireDate` varchar(255) DEFAULT NULL,
  `Salary` decimal(10,2) DEFAULT NULL,
  `Commission` decimal(10,2) DEFAULT NULL,
  `DeptID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`EmpNo`, `EmpName`, `Job`, `Mgr`, `HireDate`, `Salary`, `Commission`, `DeptID`) VALUES
(1, 'Jesryl', 'Owner', 0, '1979-03-01', 9999.00, 9999.00, 1001),
(2, 'John Doe', 'Manager', NULL, '2022-01-01', 5000.00, NULL, 1001),
(3, 'Jane Smith', 'Salesperson', 1, '2022-02-15', 3000.00, 500.00, 1004),
(4, 'Mike Johnson', 'Salesperson', 1, '2022-02-15', 3000.00, 300.00, 1004),
(5, 'Emily Williams', 'Clerk', 1, '2022-03-01', 2000.00, NULL, 1003),
(6, 'David Brown', 'Salesperson', 1, '2022-02-15', 3000.00, 400.00, 1004),
(7, 'Sarah Davis', 'Manager', NULL, '2022-04-01', 5500.00, NULL, 1002),
(8, 'Robert Wilson', 'Clerk', 4, '2022-03-15', 2200.00, NULL, 1001),
(9, 'Jennifer Lee', 'Salesperson', 4, '2022-03-15', 3200.00, 200.00, 1001),
(10, 'Michael Adams', 'Assistant', 2, '2022-05-01', 2500.00, NULL, 1003),
(11, 'Laura Thompson', 'Clerk', 4, '2022-04-15', 2400.00, NULL, 1002),
(12, 'Daniel Harris', 'Manager', NULL, '2022-02-01', 4800.00, NULL, 1001),
(13, 'Sophia Martinez', 'Clerk', 6, '2022-05-10', 2100.00, NULL, 1003),
(14, 'William Turner', 'IT', 7, '2022-06-15', 3500.00, 400.00, 1004),
(15, 'Olivia Anderson', 'HR', 6, '2022-06-01', 2300.00, NULL, 1002),
(16, 'James Wilson', 'IT', 7, '2022-05-15', 3200.00, 300.00, 1004);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`DeptID`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`EmpNo`),
  ADD KEY `DeptID` (`DeptID`),
  ADD KEY `FK_Mgr` (`Mgr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `EmpNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `FK_Mgr` FOREIGN KEY (`Mgr`) REFERENCES `employees` (`EmpNo`),
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`DeptID`) REFERENCES `department` (`DeptID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
