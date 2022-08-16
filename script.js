const buttonCalc = document.querySelector("#calculateButton");
const result = document.querySelector("#outputText");

buttonCalc.addEventListener("click", calc);

function calc() {

const name = document.querySelector('#nameInput').value;
const height = document.querySelector("#heightInput").value;
const weight = document.querySelector('#weightInput').value;
const totalValueCalc = (weight / (height * height)).toFixed(1);

  if(totalValueCalc < 18.5) {
    result.textContent = `${name} , seu IMC é ${totalValueCalc}, vocẽ está abaixo do peso.`
  } else if(totalValueCalc >= 18.5 && totalValueCalc <= 24.9) {
    result.textContent = `${name} , seu IMC é ${totalValueCalc}, vocẽ está com o peso normal.`
  } else if(totalValueCalc >= 25 && totalValueCalc <= 29.9) {
    result.textContent = `${name} , seu IMC é ${totalValueCalc}, vocẽ está com sobrepeso.`
  } else if(totalValueCalc >= 30 && totalValueCalc <= 34.9) {
    result.textContent = `${name} , seu IMC é ${totalValueCalc}, vocẽ está com obesidade classe 1.`
  } else if(totalValueCalc >=35 && totalValueCalc <= 39.9) {
    result.textContent = `${name} , seu IMC é ${totalValueCalc}, vocẽ está com obesidade classe 2.`
  } else if(totalValueCalc >= 40) {
    result.textContent = `${name} , seu IMC é ${totalValueCalc}, vocẽ está com obesidade classe 3.`
  } else {
    result.textContent = 'Preencha todos os campos e o resultado aparecerá aqui.'
  }
};
 
  
  







