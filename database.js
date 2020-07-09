const starterURL = `http://localhost:3000/starters`
const flavorURL = `http://localhost:3000/flavors`
const finaleURL = `http://localhost:3000/finales`

const starterForm = document.getElementById('starter-form')
const flavorForm = document.getElementById('flavor-form')
const finaleForm = document.getElementById('finale-form')

const thanksStarter = document.getElementById('thanks-starter')
const thanksFlavor = document.getElementById('thanks-flavor')
const thanksFinale = document.getElementById('thanks-finale')

starterForm.addEventListener('submit', (event) => captureStarterFormInput(event))
flavorForm.addEventListener('submit', (event) => captureFlavorFormInput(event))
finaleForm.addEventListener('submit', (event) => captureFinaleFormInput(event))


function captureStarterFormInput(event){
    event.preventDefault()
    const starterFormData = new FormData(starterForm)
    const newStarter = starterFormData.get('starter')
    persistStarter(newStarter)
    throwStarterThankYOU()
    starterForm.reset()
}

function persistStarter(starter){
    fetch(starterURL, {
        method: 'POST',
        headers: {
            'Accept' : 'application/JSON',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name:starter})
    })
}

function captureFlavorFormInput(event){
    event.preventDefault()
    const flavorFormData = new FormData(flavorForm)
    const newFlavor = flavorFormData.get('flavor')
    persistFlavor(newFlavor)
    throwFlavorThankYOU()
    flavorForm.reset()
}

function persistFlavor(flavor){
    fetch(flavorURL, {
        method: 'POST',
        headers: {
            'Accept' : 'application/JSON',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name:flavor})
    })
}

function captureFinaleFormInput(event){
    event.preventDefault()
    const finaleFormData = new FormData(finaleForm)
    const newFinale = finaleFormData.get('finale')
    persistFinale(newFinale)
    throwFinaleThankYOU()
    finaleForm.reset()
}

function persistFinale(finale){
    fetch(finaleURL, {
        method: 'POST',
        headers: {
            'Accept' : 'application/JSON',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name:finale})
    })
}



function throwStarterThankYOU(event){
    const starterThanks = document.createElement('p')
    starterThanks.innerText = 'Thanks for adding a starter to our database!'
    thanksStarter.append(starterThanks)

}

function throwFlavorThankYOU(event){
    const flavorThanks = document.createElement('p')
    flavorThanks.innerText = 'Thanks for adding a flavor to our database!'
    thanksFlavor.append(flavorThanks)

}

function throwFinaleThankYOU(event){
    const finaleThanks = document.createElement('p')
    finaleThanks.innerText = 'Thanks for adding a finale to our database!'
    thanksFinale.append(finaleThanks)

}