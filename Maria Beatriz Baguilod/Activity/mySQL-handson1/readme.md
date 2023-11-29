Commands for mySQL Hands On 1

// Create database
CREATE DATABASE companydata;

// Create table for Department
CREATE TABLE Department (
    DeptID int(11) PRIMARY KEY,
    DeptName varchar(100),
    Location varchar(100)
);

// Insert a new department (same format as the rest of the departments)
INSERT INTO `Department`(`DeptID`, `DeptName`, `Location`) 
VALUES (1001,'Executive','BGC')

// Create table for Employees
CREATE TABLE Employees (
    EmpNo int(11),
    EmpName varchar(100),
    Job varchar(100),
    Mgr int(11),
    HireDate datetime,
    Salary decimal(10,),
    Commission int(11),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

// Insert a new employee (same format as the rest of the employees)
INSERT INTO `Employees`(`EmpNo`, `EmpName`, `Job`, `Mgr`, `HireDate`, `Salary`, `Commission`, `DeptID`) 
VALUES (1001, 'Scott', 'President', NULL, '1978-01-01 00:00:00', 5000, NULL, 1001);
