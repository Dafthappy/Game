console.log("hello")

//----------iModel
//----------Glue (connection to the View - DOM)

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d');

//----------Constants (lookup data structures - that don't change)

//----------State Variables (state is the data that changes as program runs)
ctx.fillStyle='#6FFFE9';
ctx.fillRect(0, 0, 20, 20);
//make a class with the 

//----------View
//----------Cache (to remember) DOM Elements (if they are "touched" more than once)


//----------Event Listeners 
//keydown 


//----------CONTROLLER  (Functions)
//control movement 
    //once key is pressed, looks for which key is pressed and then change direction accordingly 
//create random objects on the gameSpace 
    //use Math.random() with regards to the canvas length and height
//detect collision of snake head to objects
    //if collision is with object on gameSpace, then append that object to the body
    //if collision is with body, then game over
//

//----------initialize all state, then call render (means to display or visualize data
initialize();


function initialize() {


  render();
}

function render () { //this is the game loop

}

