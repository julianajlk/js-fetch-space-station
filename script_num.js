"use strict"
let year = new Date().getFullYear()
let number = 1

document.addEventListener("DOMContentLoaded", function() {
  setInterval(fetchHistory, 5000)
  let button = document.querySelector('#bttn-number-one')
  button.addEventListener('click', fetchNumberOne)
  let formElement = document.querySelector('form')
  formElement.addEventListener('submit', numberForm)
  let allButton = document.getElementById('all')
  allButton.addEventListener('click', handleAll)
})

//1. Number One
function fetchNumberOne() {
  fetch('http://numbersapi.com/1/trivia')
  .then(res => res.text())
  .then(textData => numberOne(textData))
}

function numberOne(numberData) {
  let numberOneData = document.querySelector('.number-1-data')
  numberOneData.innerText = `Number 1: ${numberData}`
}


//2. Pick any number, fetch a math fact about that number
function fetchAnyNumber(number) {
  fetch(`http://numbersapi.com/${number}`)
  .then(res => res.text())
  .then(jsonData => renderAnyNumber(jsonData))
}

function numberForm(e) {
  e.preventDefault()
  let number = document.getElementById('number-input').value
  fetchAnyNumber(number)
  e.currentTarget.reset()
}

function renderAnyNumber(jsonData) {
  let anyNumber = document.createElement('li')
  let mathFact = document.querySelector('.math-fact')
  mathFact.appendChild(anyNumber)
  anyNumber.innerText = jsonData
}


//3. History interval every 5 secs
function fetchHistory() {
  fetch(`http://numbersapi.com/${year}/year`)
  .then(res => res.text())
  .then(historyData => history(historyData))
  year--;
}

function history(historyData) {
  let historyFact = document.querySelector('.history')
  historyFact.innerText = `${historyData}`
}


//4. Fetch 100 numbers on click
function fetchAll() {
  fetch(`http://numbersapi.com/${number}`)
  .then(res => res.text())
  .then(allData => all(allData))
}

function all(allData) {
  let allNum = document.querySelector('.all-numbers')
  let liElement = document.createElement('li')
  allNum.appendChild(liElement)
  liElement.innerText = allData
}

//handle 100 numbers
function handleAll() {
  let allNumbers = []
  for (let i=0; i<100; i++) {
    // Math.random() * (max - min) + min
    allNumbers.push(Math.floor((Math.random() * 500) + 1))
  }
  //show more than 1 number
  for (number of allNumbers) {
    fetchAll()
  }
}
