'use strict';


let name1 = "gowtham";
let name2 = "gd";
let names = name1+name2;
console.log(names);

// logical questions and answers start here

// 1. Write a function that changes the text content of a given element. 

function changeText() {
  var paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "New text";
}


// 2. Write a function that counts and displays the number of characters in a text input 

function characterCounter() {
  var inputElement = document.getElementById("textInput");
  var charCount = inputElement.value.length;
  var characterCountElement = document.getElementById("characterCount");
  characterCountElement.textContent = charCount;
}


// 3. Create a simple image gallery that allows users to click on thumbnails and display the selected image in a larger view.

function showImage(imageSource) {
  var largeImageElement = document.getElementById("largeImage");
  largeImageElement.src = imageSource;
  largeImageElement.style.display = "block";
}



// 4. Write a function that counts and displays the frequency of each word in a given sentence. 

// function wordFrequencyCounter() {
//   var inputSentence = document.getElementById("sentenceInput").value;

//   var cleanSentence = inputSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();

//   var wordsArray = cleanSentence.split(/\s+/);

//   var wordFrequency = {};

//   wordsArray.forEach(function (word) {
//     if (wordFrequency[word]) {
//       wordFrequency[word]++;
//     } else {
//       wordFrequency[word] = 1;
//     }
//   });
//   var wordListElement = document.getElementById("wordList");

//   wordListElement.innerHTML = "";

//   for (var word in wordFrequency) {
//     var listItem = document.createElement("li");
//     listItem.textContent = word + ": " + wordFrequency[word];
//     wordListElement.appendChild(listItem);
//   }
// }


// 5. Write a function that checks if two password inputs match and displays the result

function checkPasswordMatch() {
  var password1 = document.getElementById("password1").value;
  var password2 = document.getElementById("password2").value;

  var matchResultElement = document.getElementById("matchResult");

  if (password1 === password2) {
    matchResultElement.textContent = "Passwords match!";
  } else {
    matchResultElement.textContent = "Passwords do not match.";
  }
}


// 6. Write a function that validates a credit card number and displays the result.



// 7. Create a dynamic list where users can add and remove items.

function addItem() {
  var newItem = document.getElementById("itemInput").value;

  var itemList = document.getElementById("itemList");

  var listItem = document.createElement("li");

  listItem.textContent = newItem;

  itemList.appendChild(listItem);

  document.getElementById("itemInput").value = "";
}

function removeItem(item) {
  var itemList = document.getElementById("itemList");
  itemList.removeChild(item);
}



// 8. Write a function that checks if a given word is a palindrome and displays the result

function checkPalindrome() {
  var inputWord = document.getElementById("wordInput").value.toLowerCase();

  var palindromeResultElement = document.getElementById("palindromeResult");

  var isPalindrome = isWordPalindrome(inputWord);

  if (isPalindrome) {
    palindromeResultElement.textContent = "'" + inputWord + "' is a palindrome!";
  } else {
    palindromeResultElement.textContent = "'" + inputWord + "' is not a palindrome.";
  }
}
function isWordPalindrome(word) {
  var cleanedWord = word.replace(/[\W_]/g, "").toLowerCase();
  
  var reversedWord = cleanedWord.split("").reverse().join("");

  return cleanedWord === reversedWord;
}



// 9. Create a countdown timer that starts when a button is clicked and displays the remaining time

// var countdownInterval;

// function startTimer(seconds) {
//   clearInterval(countdownInterval);

//   var timerDisplay = document.getElementById("timerDisplay");

//   var timeRemaining = seconds;

//   timerDisplay.textContent = "Time remaining: " + formatTime(timeRemaining);

//   countdownInterval = setInterval(function() {
//     timeRemaining--;

//     timerDisplay.textContent = "Time remaining: " + formatTime(timeRemaining);

//     if (timeRemaining <= 0) {
//       clearInterval(countdownInterval);
//       timerDisplay.textContent = "Time's up!";
//     }
//   }, 1000);
// }

// function formatTime(seconds) {
//   var minutes = Math.floor(seconds / 60);
//   var remainingSeconds = seconds % 60;
//   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
// }



// 10. Create a dark mode toggle that switches the page between light and dark themes. 

function toggleDarkMode() {
  var bodyElement = document.body;
  bodyElement.classList.toggle("dark-mode");
}


