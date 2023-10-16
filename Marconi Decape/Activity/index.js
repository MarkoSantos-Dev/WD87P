
      function displayStudentName() {
        const studentName = document.getElementById("studentName").value;
        const paragraph = document.createElement("p");
        paragraph.textContent = `Student Name: ${studentName}`;
        document.body.appendChild(paragraph);
      }

      function computeGrade() {
        displayStudentName();

        const grades = [];
        for (let i = 1; i <= 8; i++) {
          const subjectGrade = parseFloat(
            document.getElementById("subject" + i).value
          );
          grades.push(subjectGrade);
        }

        const average = getAverage(grades);
        console.log(`Average Grade: ${average}`);

        const failedGrades = getFailedGrade(grades);
        console.log("Failed Grades:");
        console.log(failedGrades);

        const passedGrades = getPassedGrade(grades);
        console.log("Passed Grades:");
        console.log(passedGrades);

        displayResult(average);
      }

      function getAverage(grades) {
        const sum = grades.reduce((total, grade) => total + grade, 0);
        return sum / grades.length;
      }

      function getFailedGrade(grades) {
        return grades.filter((grade) => grade < 75);
      }

      function getPassedGrade(grades) {
        return grades.filter((grade) => grade >= 75);
      }

      function displayResult(average) {
        let result = "";
        if (average < 68) {
          result = "Retake/Failed";
        } else if (average >= 68 && average <= 74) {
          result = "Remedial";
        } else if (average >= 75 && average <= 100) {
          result = "Passed";
        } else {
          result = "Invalid";
        }

        alert(`Average Grade: ${average}\nResult: ${result}`);
      }
   
