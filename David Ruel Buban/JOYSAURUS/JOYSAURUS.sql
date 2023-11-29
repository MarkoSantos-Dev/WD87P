-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 29, 2023 at 05:02 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `JOYSAURUS`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `DeptID` int(11) NOT NULL,
  `DeptName` varchar(255) DEFAULT NULL,
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
-- Table structure for table `Employee`
--

CREATE TABLE `Employee` (
  `EmpNo` int(11) NOT NULL,
  `EmpName` varchar(255) NOT NULL,
  `Job` varchar(255) DEFAULT NULL,
  `Mgr` varchar(255) DEFAULT NULL,
  `HireDate` datetime NOT NULL,
  `Salary` decimal(10,0) DEFAULT NULL,
  `Commission` int(11) DEFAULT NULL,
  `DeptID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Employee`
--

INSERT INTO `Employee` (`EmpNo`, `EmpName`, `Job`, `Mgr`, `HireDate`, `Salary`, `Commission`, `DeptID`) VALUES
(1001, 'Scott', 'President', NULL, '1978-01-01 00:00:00', 50000, NULL, 1001),
(1013, 'John', 'Manager', '1001', '1985-02-20 00:00:00', 30000, 5000, 1001),
(1014, 'Anna', 'Analyst', '1002', '1990-05-15 00:00:00', 25000, 2000, 1003),
(1015, 'Michael', 'Clerk', '1002', '1995-08-10 00:00:00', 20000, NULL, 1005),
(1016, 'Emily', 'Salesperson', '1002', '1998-11-25 00:00:00', 28000, 3000, 1004),
(1017, 'David', 'Clerk', '1003', '2002-04-03 00:00:00', 21000, NULL, 1005),
(1018, 'Sophia', 'Analyst', '1003', '2005-07-18 00:00:00', 26000, 1500, 1003),
(1019, 'Daniel', 'Salesperson', '1002', '2008-12-05 00:00:00', 30000, 3500, 1004),
(1020, 'Olivia', 'Clerk', '1006', '2013-03-20 00:00:00', 19000, NULL, 1005),
(1021, 'William', 'Salesperson', '1003', '2017-06-15 00:00:00', 32000, 4000, 1004),
(1022, 'Ava', 'Manager', '1001', '2020-09-08 00:00:00', 35000, 6000, 1001),
(1023, 'Benjamin', 'Clerk', '1011', '2022-01-31 00:00:00', 18000, NULL, 1005);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`DeptID`);

--
-- Indexes for table `Employee`
--
ALTER TABLE `Employee`
  ADD PRIMARY KEY (`EmpNo`),
  ADD KEY `DeptID` (`DeptID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Employee`
--
ALTER TABLE `Employee`
  MODIFY `EmpNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1024;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Employee`
--
ALTER TABLE `Employee`
  ADD CONSTRAINT `Employee_ibfk_1` FOREIGN KEY (`DeptID`) REFERENCES `department` (`DeptID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
