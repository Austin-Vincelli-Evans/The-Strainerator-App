const starterURL = `http://localhost:3000/starters`
const flavorURL = `http://localhost:3000/flavors`
const finaleURL = `http://localhost:3000/finales`

document.getElementById('generate').addEventListener('click', renderStarter)

const starterList = document.getElementById('starter-list')
const flavorList = document.getElementById('flavor-list')
const finaleList = document.getElementById('finale-list')

fetch(starterURL)
    .then(response => response.json())
    .then(result => handleStarter(result))
fetch(flavorURL)
    .then(response => response.json())
    .then(result => handleFlavor(result))
fetch(finaleURL)
    .then(response => response.json())
    .then(result => handleFinale(result))

function handleStarter(starter){
    return starter.forEach(starter => renderStarter(starter.name, starter.id))
}

function renderStarter(starter, id){
    console.log(starter, id)
    const starterWord = document.createElement('li')
    starterWord.innerText = starter
    // starterList.append(starterWord)
}

function handleFlavor(flavor){
    return flavor.forEach(flavor => renderFlavor(flavor.name, flavor.id))
}

function renderFlavor(flavor, id){
    console.log(flavor, id)
    const flavorWord = document.createElement('li')
    flavorWord.innerText = flavor
    // flavorList.append(flavorWord)
}

function handleFinale(finale){
    return finale.forEach(finale => renderFinale(finale.name, finale.id))
}

function renderFinale(finale, id){
    console.log(finale, id)
    const finaleWord = document.createElement('li')
    finaleWord.innerText = finale
    // finaleList.append(finaleWord)
}

