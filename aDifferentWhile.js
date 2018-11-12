console.log("connected correctly.")
//variables and stuff at the top, so they can be used EVERYWHERE.
let theAnswer1 = document.querySelector(`#button1Results`)

let firstInput = document.querySelector(`#input1`);

//put your actions here!



//define all your functions down here.
function amuckAgain() {
    var x = input1.value;
    theAnswer1.innerHTML += `<p>${x} is a great number</p>`;

    //try it with and without the line below - what does it do?
    // input1.value = x;
}
