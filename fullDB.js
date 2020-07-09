const starterURL = `http://localhost:3000/starters`
const flavorURL = `http://localhost:3000/flavors`
const finaleURL = `http://localhost:3000/finales`

const starterList = document.getElementById('starter-list')
const flavorList = document.getElementById('flavor-list')
const finaleList = document.getElementById('finale-list')

const starterButton = document.getElementById('starters')
const flavorButton = document.getElementById('flavors')
const finaleButton = document.getElementById('finales')

starterButton.addEventListener('click', renderStarterList)
flavorButton.addEventListener('click', renderFlavorList)
finaleButton.addEventListener('click', renderFinaleList)

function renderStarterList(){
    fetch(starterURL)
        .then(response => response.json())
        .then(result => handleStarters(result))
}

function handleStarters(starters){
    return starters.forEach(starter => renderStarter(starter.name))
}

function renderStarter(name){
    const li = document.createElement('li')
    li.innerText = name
    starterList.append(li)
}

function renderFlavorList(){
    fetch(flavorURL)
        .then(response => response.json())
        .then(result => handleFlavors(result))
}

function handleFlavors(flavors){
    return flavors.forEach(flavor => renderFlavor(flavor.name))
}

function renderFlavor(name){
    const li = document.createElement('li')
    li.innerText = name
    flavorList.append(li)
}

function renderFinaleList(){
    fetch(finaleURL)
        .then(response => response.json())
        .then(result => handleFinales(result))
}

function handleFinales(finales){
    return finales.forEach(finale => renderFinale(finale.name))
}

function renderFinale(name){
    const li = document.createElement('li')
    li.innerText = name
    finaleList.append(li)
}