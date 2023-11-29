-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2023 at 08:28 PM
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
-- Database: `testcompany`
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
(1000, 'Executive', 'New York'),
(1001, 'Management', 'New York'),
(1002, 'Development', 'San Francisco'),
(1003, 'Analysis', 'Chicago'),
(1004, 'HR', 'Los Angeles'),
(1005, 'Sales', 'Miami'),
(1006, 'Customer Service', 'Seattle');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmpNo` int(11) NOT NULL,
  `EmpName` varchar(255) NOT NULL,
  `Job` varchar(255) DEFAULT NULL,
  `Mgr` int(11) DEFAULT NULL,
  `HireDate` datetime NOT NULL,
  `Salary` decimal(10,0) DEFAULT NULL,
  `Commission` int(11) DEFAULT NULL,
  `DeptID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmpNo`, `EmpName`, `Job`, `Mgr`, `HireDate`, `Salary`, `Commission`, `DeptID`) VALUES
(1111, 'John Doe', 'President', NULL, '2023-01-15 00:00:00', 60000, 5000, 1000),
(1112, 'Alice Johnson', 'Developer', 1118, '2023-03-20 00:00:00', 50000, NULL, 1002),
(1113, 'Bob Williams', 'Salesman', 1118, '2023-02-10 00:00:00', 45000, 2000, 1005),
(1114, 'Sarah Brown', 'Analyst', 1112, '2023-04-25 00:00:00', 55000, 3000, 1003),
(1115, 'Michael Clark', 'Marketing Specialist', 1118, '2023-06-12 00:00:00', 48000, 1500, 1005),
(1116, 'Emily Garcia', 'HR Coordinator', 1111, '2023-05-08 00:00:00', 50000, NULL, 1004),
(1117, 'Daniel Anderson', 'Developer', 1118, '2023-07-03 00:00:00', 52000, NULL, 1002),
(1118, 'Sophia Martinez', 'Manager', 1111, '2023-08-20 00:00:00', 58000, 4500, 1001),
(1119, 'Liam Wilson', 'Salesman', 1118, '2023-09-14 00:00:00', 47000, 1800, 1005),
(1120, 'Olivia Thompson', 'Analyst', 1112, '2023-10-05 00:00:00', 56000, 3200, 1003),
(1121, 'Noah Garcia', 'Developer', 1118, '2023-11-11 00:00:00', 51000, NULL, 1002),
(1122, 'Ava Rodriguez', 'HR Coordinator', 1111, '2023-12-22 00:00:00', 49000, NULL, 1004),
(1123, 'Ethan Smith', 'Clerk', 1116, '2024-01-07 00:00:00', 40000, 1000, 1006),
(1124, 'Isabella Lee', 'Analyst', 1112, '2024-02-14 00:00:00', 57000, 3500, 1003),
(1125, 'Mia Davis', 'Developer', 1118, '2024-03-30 00:00:00', 53000, NULL, 1002);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`DeptID`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmpNo`),
  ADD KEY `FK_DepartmentEmployee` (`DeptID`),
  ADD KEY `FK_Manager_Employee` (`Mgr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmpNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1126;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FK_DepartmentEmployee` FOREIGN KEY (`DeptID`) REFERENCES `department` (`DeptID`),
  ADD CONSTRAINT `FK_Manager_Employee` FOREIGN KEY (`Mgr`) REFERENCES `employee` (`EmpNo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
