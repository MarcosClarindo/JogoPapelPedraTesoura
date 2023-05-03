const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
//  PARA PODER ESCOLHER VÁRIOS ELEMENTOS
const possibleChoices = document.querySelectorAll('button')
//VARIÁVEIS USADAS DENTRO DA FUNÇÃO
let userChoice
let computerChoice
let result
//PARA PODER ESCOLHER QUAL BOTÃO SELECIONAR, COM O EVENTO DE CLICK
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice 
    genereteComputerChoice()
    getResult()
}))

function genereteComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // PODE USAR A COSNT possibleChoices NO LUGAR DO NÚMERO 3
    //console.log(randomNumber);

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = 'Está empatado!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Você ganhou!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Você perdeu!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Você ganhou!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Você perdeu!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Você ganhou!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'Você perdeu!'
    }
    resultDisplay.innerHTML = result
}