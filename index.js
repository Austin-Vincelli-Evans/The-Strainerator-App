const starterURL = `http://localhost:3000/starters`
const flavorURL = `http://localhost:3000/flavors`
const finaleURL = `http://localhost:3000/finales`


const starterList = document.getElementById('starter-list')
const flavorList = document.getElementById('flavor-list')
const finaleList = document.getElementById('finale-list')
const generateButton = document.getElementById('generate')
let starterWord = ""
let flavorWord = ""
let finaleWord = ""

generateButton.addEventListener('click', fetchCalls)

function fetchCalls(){
    fetch(starterURL)
        .then(response => response.json())
        .then(result => handleStarter(result))
    fetch(flavorURL)
        .then(response => response.json())
        .then(result => handleFlavor(result))
    fetch(finaleURL)
        .then(response => response.json())
        .then(result => handleFinale(result))
}

function handleStarter(starter){
    starterWord = starter[Math.floor(Math.random() * starter.length)].name
    renderStarter(starterWord)
}

function renderStarter(word){
    const starterWord = document.createElement('li')
    starterWord.innerText = word
    starterList.append(starterWord)
}


function handleFlavor(flavor){
    flavorWord = flavor[Math.floor(Math.random() * flavor.length)].name
    renderFlavor(flavorWord)
}

function renderFlavor(word){
    const flavorWord = document.createElement('li')
    flavorWord.innerText = word
    flavorList.append(flavorWord)
}

function handleFinale(finale){
    finaleWord = finale[Math.floor(Math.random() * finale.length)].name
    renderFinale(finaleWord)
}

function renderFinale(word){
    const finaleWord = document.createElement('li')
    finaleWord.innerText = word
    finaleList.append(finaleWord)
}
