// Part 1: Date Display
// Create a Date object and retrieve the current month, day, and year.
var currentDate = new Date();
var month = currentDate.getMonth() + 1; // JavaScript months start at zero.
var day = currentDate.getDate();
var year = currentDate.getFullYear();
var formattedMonth = String(month).padStart(2, "0");
var formattedDay = String(day).padStart(2, "0");
var dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + year;
document.getElementById("dateOutput").innerHTML = dateMessage;

// Part 2: Number Conversion
// Use four separate variables; no arrays or loops are used here.
var firstValue = "88";
var secondValue = "92.5";
var thirdValue = "not a score";
var fourthValue = "76";

var firstNumber = Number(firstValue);
var secondNumber = Number(secondValue);
var thirdNumber = Number(thirdValue);
var fourthNumber = Number(fourthValue);

var firstIsNaN = Number.isNaN(firstNumber);
var secondIsNaN = Number.isNaN(secondNumber);
var thirdIsNaN = Number.isNaN(thirdNumber);
var fourthIsNaN = Number.isNaN(fourthNumber);

var firstIsInteger = Number.isInteger(firstNumber);
var secondIsInteger = Number.isInteger(secondNumber);
var thirdIsInteger = Number.isInteger(thirdNumber);
var fourthIsInteger = Number.isInteger(fourthNumber);

// Combine each original value, conversion, and validation result into one string.
var conversionResults =
  "<p>Original: '" + firstValue + "' → Converted: " + firstNumber + " → isNaN: " + firstIsNaN + " → isInteger: " + firstIsInteger + "</p>" +
  "<p>Original: '" + secondValue + "' → Converted: " + secondNumber + " → isNaN: " + secondIsNaN + " → isInteger: " + secondIsInteger + "</p>" +
  "<p>Original: '" + thirdValue + "' → Converted: " + thirdNumber + " → isNaN: " + thirdIsNaN + " → isInteger: " + thirdIsInteger + "</p>" +
  "<p>Original: '" + fourthValue + "' → Converted: " + fourthNumber + " → isNaN: " + fourthIsNaN + " → isInteger: " + fourthIsInteger + "</p>";
document.getElementById("numberConversionOutput").innerHTML = conversionResults;

// Conditional message 1: check for an invalid number.
var invalidMessage;
if (Number.isNaN(thirdNumber)) {
  invalidMessage = "The value 'not a score' is not a valid number.";
} else {
  invalidMessage = "The text value was converted into a valid number.";
}

// Conditional message 2: check whether the first converted value is an integer.
var integerMessage;
if (Number.isInteger(firstNumber)) {
  integerMessage = "The score 88 is an integer.";
} else {
  integerMessage = "The score 88 contains a decimal portion.";
}
document.getElementById("numberConversionOutput").innerHTML +=
  "<div class='notice'><p>" + invalidMessage + "</p><p>" + integerMessage + "</p></div>";

// Part 3: Grade Calculator and Number Formatting
// Define four numeric assignment scores.
var assignmentOne = 88;
var assignmentTwo = 92;
var assignmentThree = 76;
var assignmentFour = 85;

// Addition calculates total points; division calculates the average.
var totalScore = assignmentOne + assignmentTwo + assignmentThree + assignmentFour;
var averageScore = totalScore / 4;
var formattedAverage = averageScore.toFixed(2);
var formattedTotal = totalScore.toLocaleString();

var gradeResults =
  "<div class='scores'>" +
  "<div><span>Assignment 1</span><strong>" + assignmentOne + "%</strong></div>" +
  "<div><span>Assignment 2</span><strong>" + assignmentTwo + "%</strong></div>" +
  "<div><span>Assignment 3</span><strong>" + assignmentThree + "%</strong></div>" +
  "<div><span>Assignment 4</span><strong>" + assignmentFour + "%</strong></div></div>" +
  "<p class='total'>Total points <strong>" + formattedTotal + " / 400</strong></p>" +
  "<p class='average'>Average score <strong>" + formattedAverage + "%</strong></p>";
document.getElementById("mathOutput").innerHTML = gradeResults;

// Conditional message 3: determine whether the average is passing.
var gradeMessage;
if (averageScore >= 70) {
  gradeMessage = "Passing — the average is 70% or higher.";
} else {
  gradeMessage = "Not passing — the average is below 70%.";
}

// Conditional message 4: check for an average of at least 90%.
var achievementMessage;
if (averageScore >= 90) {
  achievementMessage = "Excellent work! The average is 90% or higher.";
} else {
  achievementMessage = "Keep going! The average is below 90%.";
}
document.getElementById("mathOutput").innerHTML +=
  "<div class='notice'><p>" + gradeMessage + "</p><p>" + achievementMessage + "</p></div>";
