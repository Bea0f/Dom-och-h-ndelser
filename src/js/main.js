
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener('click', () => {
  let newText = document.getElementById("changeText");
  let myInput = document.getElementById("myTxt").value;
 
  newText.innerHTML += myInput;

});

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener('click', () => {
  let printSum = document.getElementById("printSum");
  printSum.innerHTML = "=";
  let inputOne = document.getElementById("numberOne").value;
  let inputTwo = document.getElementById("numberTwo").value;

  inputOne = Number(inputOne);
  inputTwo = Number(inputTwo);

  let sum = inputOne + inputTwo;

  
  printSum.innerHTML += sum;
});

const compareBtn = document.getElementById("compareBtn");


compareBtn.addEventListener('click', () => {
  let printText = document.getElementById("printText");
  let numCompare = document.getElementById("numberCompare").value;
  numCompare = Number(numCompare);

  if(numCompare < 100){
    printText.innerHTML = "Det var ett litet tal!";
  }else if(numCompare > 100) {
    printText.innerHTML = "Det var ett stort tal!";
  }else if(numCompare == 100){
    printText.innerHTML = "Det var samma som 100!";
  }
})


