/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-num")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

convertBtn.addEventListener("click", function () {
    console.log(inputEl.value)
    let userInput = inputEl.value
    lengthEl.textContent = `${userInput} meters = ${(userInput * 3.281).toFixed(3)} feet | ${(userInput * 0.3048).toFixed(3)} meters`
    volumeEl.textContent = `${userInput} liters = ${(userInput * 0.264).toFixed(3)} gallons | ${(userInput * 3.78541).toFixed(3)} liters`
    massEl.textContent = `${userInput} kilos = ${(userInput * 2.204).toFixed(3)} pounds | ${(userInput * 0.453592).toFixed(3)} kilos`
})