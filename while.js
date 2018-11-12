console.log("connected correctly.")
//variables and stuff at the top, so they can be used EVERYWHERE.
let firstButton = document.querySelector(`#button1`)

let welcomeBack = 0;

//put your actions here!
firstButton.addEventListener("click", e=> {
  runAmuck();
})


//define all your functions down here.
function runAmuck(){
  while (welcomeBack < 10){
    firstButton.innerHTML += `<h6>AMUCK!</h6>`
    welcomeBack += 1
  }
}

//We are going to figure out the difference between:
//window.alert()
//window.confirm()
//window.prompt()
