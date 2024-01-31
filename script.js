//Assigning of variables in JavaScript
const form = document.getElementById("form");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

//FUNCTION TO CONVERT NUMBER TO ROMAN
const convertNumberToRoman = (number) => {
  /*FUNCION QUE SE ENCARGARA DE HACER TODA LA
    LOGICA DEL PROGRAMA*/
  let roman = ""; 
  for (const key in numerals) {
    while (number >= numerals[key]) {
        roman += key;
        number -= numerals[key];
    }
  }
  //RETURN OF FINAL VALUE
  return result(roman, true);
  
};
//Showing errors in base to the number given in Input
const inputText = () => {
    const number = document.getElementById("number");
  if (number.value === "") {
    return result("Please enter a valid number", false);
  } else if (number.value <= 0) {
    return result("Please enter a number greater than or equal to 1", false);
  } else if (number.value > 3999) {
    return result("Please enter a number less than or equal to 3999", false);
  } else {
    output.classList.add("hidden");
    return convertNumberToRoman(parseInt(number.value));
  }
};
//FUNCTION TO CLEAN THE INPUT TEXT AND TO HIDE THE OUTPUT
const showOutput = () => {
    output.classList.remove("hidden");
};
//FUNCTION THAT INSERT THE MESSAGE IN DOM
const result = (text, type) => {
  if (type) {
    output.classList.remove('output-error');
    output.classList.add('output');
    output.innerText = text;
    showOutput();
  } else {
    output.classList.add('output-error');
    output.innerText = text;
    showOutput();
  }
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputText();
});
//FUNCTION THAT EXECUTE THE BUTTON
const handleButton = () => {
    inputText();
};
convertBtn.addEventListener('click', handleButton);
