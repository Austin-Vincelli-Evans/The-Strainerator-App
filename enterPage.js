const enterButton = document.getElementById('enter-button')

enterButton.addEventListener('click', alertFunction)

function alertFunction(event){ 
    window.confirm('By Selecting OK\n you confirm you are either 21 years of age \nor you have a medical card')
    if(confirm('You are older then 21 or have your med card!')){
        window.location.replace(`http://localhost:3002/index.html`)
    } else {
        txt = "Come back another time"
    }

    
}