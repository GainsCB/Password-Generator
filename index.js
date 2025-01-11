// References HTML Elements
const inputEl = document.getElementById("input-el");
const generateBtn = document.getElementById("generate-btn");
const upperCaseToggleBtn = document.getElementById("upper-case-toggle-btn");
const lowerCaseToggleBtn = document.getElementById("lower-case-toggle-btn");
const symbolsToggleBtn = document.getElementById("symbols-toggle-btn");
const numbersToggleBtn = document.getElementById("numbers-toggle-btn");
const passwordOneEl = document.getElementById("password-one-el");
const passwordTwoEl = document.getElementById("password-two-el");

// Password characters
const charactersUpperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const charactersLowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Toggles
let upperCaseToggle = false;
let lowerCaseToggle = false;
let symbolsToggle = false;
let numbersToggle = false;

// Buttons

upperCaseToggleBtn.addEventListener("click", function () {
  if (upperCaseToggle === false) {
    upperCaseToggle = true;
    upperCaseToggleBtn.style.backgroundColor = "#F9FAFB";
    upperCaseToggleBtn.style.color = "#34D399";
  } else {
    upperCaseToggle = false;
    upperCaseToggleBtn.style.color = "#F9FAFB";
    upperCaseToggleBtn.style.backgroundColor = "#34D399";
  }
});

lowerCaseToggleBtn.addEventListener("click", function () {
  if (lowerCaseToggle === false) {
    lowerCaseToggle = true;
    lowerCaseToggleBtn.style.backgroundColor = "#F9FAFB";
    lowerCaseToggleBtn.style.color = "#34D399";
  } else {
    lowerCaseToggle = false;
    lowerCaseToggleBtn.style.color = "#F9FAFB";
    lowerCaseToggleBtn.style.backgroundColor = "#34D399";
  }
});

symbolsToggleBtn.addEventListener("click", function () {
  if (symbolsToggle === false) {
    symbolsToggle = true;
    symbolsToggleBtn.style.backgroundColor = "#F9FAFB";
    symbolsToggleBtn.style.color = "#34D399";
  } else {
    symbolsToggle = false;
    symbolsToggleBtn.style.color = "#F9FAFB";
    symbolsToggleBtn.style.backgroundColor = "#34D399";
  }
});

numbersToggleBtn.addEventListener("click", function () {
  if (numbersToggle === false) {
    numbersToggle = true;
    numbersToggleBtn.style.backgroundColor = "#F9FAFB";
    numbersToggleBtn.style.color = "#34D399";
  } else {
    numbersToggle = false;
    numbersToggleBtn.style.color = "#F9FAFB";
    numbersToggleBtn.style.backgroundColor = "#34D399";
  }
});

// Password Length

let passwordLength = "";

function randomPassword(length) {
  for (let i = 0; i < length; i++) {
    passwordLength++;
  }
}

// Adds characters to Array

let characters = [];

function charactersArray() {
  if (upperCaseToggle === true) {
    characters = characters.concat(charactersUpperCase);
  }

  if (lowerCaseToggle === true) {
    characters = characters.concat(charactersLowerCase);
  }

  if (symbolsToggle === true) {
    characters = characters.concat(symbols);
  }

  if (numbersToggle === true) {
    characters = characters.concat(numbers);
  }

  // console.log(characters)
  return characters;
}

// Generates Random Passwords
generateBtn.addEventListener("click", function () {
  // // Clears the HTML old values
  passwordOneEl.textContent = "";
  passwordTwoEl.textContent = "";

  let inputNum = inputEl.value;
  //   console.log(`this is the input number ${inputNum}`);
  randomPassword(inputNum);

  charactersArray();

// Generates 2 random passwords with a length of 15 characters
  for (let i = 0; i < inputNum; i++) {
    let randompasswordOne = Math.floor(Math.random() * characters.length);
    passwordOneEl.textContent += characters[randompasswordOne];
    let randompasswordTwo = Math.floor(Math.random() * characters.length);
    passwordTwoEl.textContent += characters[randompasswordTwo];
  }

  characters = [""];
});
