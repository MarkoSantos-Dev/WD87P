function calculateGrade() {
// grades for 8 subjects
	const grades = [];
	const subjectNames = ['Math', 'Science', 'English', 'Filipino', 'History', 'Arts', 'Literature', 'P.E.'];

	for (let i = 0; i < 8; i++) {
			const inputId = `subject${i + 1}`;
			const grade = parseFloat(document.getElementById(inputId).value);
			grades.push({ name: subjectNames[i], grade: grade });
	}

// calculate general average
	const totalGrades = grades.reduce((total, subject) => total + subject.grade, 0);
	const averageGrade = (totalGrades / grades.length).toFixed(2);

// display average grade
	document.getElementById('averageGrade').textContent = `Average: ${averageGrade}`;

// display "gradeStatus"
let gradeStatus = '';
if (averageGrade < 68) {
		gradeStatus = 'Retake/Failed';
} else if (averageGrade >= 68 && averageGrade <= 74.99) {
		gradeStatus = 'Remedial';
} else if (averageGrade >= 75 && averageGrade <= 100) {
		gradeStatus = 'Passed';
} else {
		gradeStatus = 'Invalid';
}
document.getElementById('gradeStatus').textContent = `Grade Status: ${gradeStatus}`;

// display failed/passed subjects
displayFailedSubjects(grades);
displayPassedSubjects(grades);

// display failedSubjects
function displayFailedSubjects(grades) {
	const failedSubjects = grades.filter(subject => subject.grade < 75);
	const failedSubjectsNames = failedSubjects.map(subject => subject.name);
	const failedSubjectsList = failedSubjectsNames.join(', ');

document.getElementById('failedSubjects').textContent = `Failed Subjects: ${failedSubjectsList}`;
}

// display "passedSubjects"
function displayPassedSubjects(grades) {
	const passedSubjects = grades.filter(subject => subject.grade >= 75);
	const passedSubjectsNames = passedSubjects.map(subject => subject.name);
	const passedSubjectsList = passedSubjectsNames.join(', ');

document.getElementById('passedSubjects').textContent = `Passed Subjects: ${passedSubjectsList}`;
}
}