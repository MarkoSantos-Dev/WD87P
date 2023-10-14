function displayStudentName() {
    let student = prompt('What is your name?');
    document.getElementById("student-name").innerHTML = student;
    return student;
}

let studentName = displayStudentName();
console.log(studentName);

const subjects = ['mathematics', 'science', 'english', 'social-science', 'history', 'physical-education', 'filipino', 'christian-living']

function getAverage() {
    let mathGrade = parseInt(document.getElementById("mathematics").value);
    let scienceGrade = parseInt(document.getElementById("science").value);
    let englishGrade = parseInt(document.getElementById("english").value);
    let socialScienceGrade = parseInt(document.getElementById("social-science").value);
    let historyGrade = parseInt(document.getElementById("history").value);
    let physicalEducationGrade = parseInt(document.getElementById("physical-education").value);
    let filipinoGrade = parseInt(document.getElementById("filipino").value);
    let christianLivingGrade = parseInt(document.getElementById("christian-living").value);

    let totalGrades = (mathGrade + scienceGrade + englishGrade + socialScienceGrade + historyGrade + physicalEducationGrade + filipinoGrade + christianLivingGrade);
    let numberOfSubjects = 8;
    let computeGrade = totalGrades / numberOfSubjects;

    document.getElementById("getAverage").innerHTML = computeGrade;
 
    getFailedGrade(mathGrade, scienceGrade, englishGrade, socialScienceGrade, historyGrade, physicalEducationGrade, filipinoGrade, christianLivingGrade);
    getPassedGrade(mathGrade, scienceGrade, englishGrade, socialScienceGrade, historyGrade, physicalEducationGrade, filipinoGrade, christianLivingGrade);

    getStatusAverage(computeGrade);
}

function getFailedGrade(mathGrade, scienceGrade, englishGrade, socialScienceGrade, historyGrade, physicalEducationGrade, filipinoGrade, christianLivingGrade) {
    let failedSubjects = [];

    if (mathGrade < 75) {
        failedSubjects.push("Mathematics");
    }
    if (scienceGrade < 75) {
        failedSubjects.push("Science");
    }
    if (englishGrade < 75) {
        failedSubjects.push("English");
    }
    if (socialScienceGrade < 75) {
        failedSubjects.push("Social Science");
    }
    if (historyGrade < 75) {
        failedSubjects.push("History");
    }
    if (physicalEducationGrade < 75) {
        failedSubjects.push("Physical Education");
    }
    if (filipinoGrade < 75) {
        failedSubjects.push("Filipino");
    }
    if (christianLivingGrade < 75) {
        failedSubjects.push("Christian Living");
    }
    console.log(failedSubjects);
    document.getElementById("failed-subjects").innerHTML = failedSubjects.join(", ")
}

function getPassedGrade(mathGrade, scienceGrade, englishGrade, socialScienceGrade, historyGrade, physicalEducationGrade, filipinoGrade, christianLivingGrade) {
    let passedSubjects = [];

    if (mathGrade >= 75) {
        passedSubjects.push("Mathematics");
    }
    if (scienceGrade >= 75) {
        passedSubjects.push("Science");
    }
    if (englishGrade >= 75) {
        passedSubjects.push("English");
    }
    if (socialScienceGrade >= 75) {
        passedSubjects.push("Social Science");
    }
    if (historyGrade >= 75) {
        passedSubjects.push("History");
    }
    if (physicalEducationGrade >= 75) {
        passedSubjects.push("Physical Education");
    }
    if (filipinoGrade >= 75) {
        passedSubjects.push("Filipino");
    }
    if (christianLivingGrade >= 75) {
        passedSubjects.push("Christian Living");
    }
    console.log(passedSubjects);
    document.getElementById("passed-subjects").innerHTML = passedSubjects.join(", ")
}

function getStatusAverage(computeGrade) {
    let nextSteps = ""; 

    if (computeGrade < 68) {
        nextSteps = "Retake/Failed 😔";
    } else if (computeGrade >= 68 && computeGrade <= 74) {
        nextSteps = "Remedial 🙇🏻‍♀️";
    } else if (computeGrade >= 75 && computeGrade <= 100) {
        nextSteps = "Passed 🙌🏻";
    } else {
        nextSteps = "Invalid 👎🏻";
    }

    document.getElementById("next-steps").innerHTML = nextSteps;
}

function computeGrade () {
    let computeGrade = getAverage();
    getFailedGrade(mathGrade, scienceGrade, englishGrade, socialScienceGrade, historyGrade, physicalEducationGrade, filipinoGrade, christianLivingGrade);
    getPassedGrade(mathGrade, scienceGrade, englishGrade, socialScienceGrade, historyGrade, physicalEducationGrade, filipinoGrade, christianLivingGrade);
    getStatusAverage(computeGrade);
}

document.getElementById("compute-button").addEventListener("click", computeGrade);