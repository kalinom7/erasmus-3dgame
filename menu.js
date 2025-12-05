 

function iteration(squares,string){
    for(let i = 0; i < squares.length; i++){
        let r = (squares[i][0] - pawn.x)**2 
                + (squares[i][1] - pawn.y)**2
                + (squares[i][2] - pawn.z)**2;
        let r1 = squares[i][6]**2;

        if( r< r1) {
            document.getElementById(string + i).style.display = "none";
            squares[i][0] = 10000;
        }
    }
}
function repeatForever(){
    update();
    iteration(coins,"coins");
    iteration(keys,"keys");
}


//variables for navigation


var mainMenu = document.getElementById("mainMenu");

var controlsMenu = document.getElementById("controlsMenu");

var startGameButton = document.getElementById("startGameButton");

var controlsMenuButton = document.getElementById("controlsMenuButton");
var backButtonControls = document.getElementById("backButtonControls");

var rulesMenu = document.getElementById("rulesMenu");
var rulesMenuButton = document.getElementById("rulesMenuButton");
var backButtonRules = document.getElementById("backButtonRules")

var clickSound = new Audio;
clickSound.src = "sounds/clicksound.mp3";

//create navigation
startGameButton.onclick = function(){
    clickSound.play();
    mainMenu.style.display = "none";

    createNewWorld();
    CreateSquares(coins,"coin");
    CreateSquares(keys,"key");
    TimerGame = setInterval(repeatForever, 10);
    canlock = true;
}
controlsMenuButton.onclick = function(){
    clickSound.play();

    mainMenu.style.display = "none";
    controlsMenu.style.display = "block";
}

rulesMenuButton.onclick = function(){
    clickSound.play();

    mainMenu.style.display = "none";
    rulesMenu.style.display = "block";
}

backButtonRules.onclick = function(){
    clickSound.play();

    rulesMenu.style.display = "none"
    mainMenu.style.display = "block";
}

backButtonControls.onclick = function(){
    clickSound.play();

    controlsMenu.style.display = "none";
    mainMenu.style.display = "block";
}