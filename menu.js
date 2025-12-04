//variables for navigation

var mainMenu = document.getElementById("mainMenu");
var controlsMenu = document.getElementById("controlsMenu");
var startGameButton = document.getElementById("startGameButton");
var controlsMenuButton = document.getElementById("controlsMenuButton");
var backButton = document.getElementById("backButton");
var clickSound = new Audio;
clickSound.src = "sounds/clicksound.mp3";

//create navigation
startGameButton.onclick = function(){
    clickSound.play();
    mainMenu.style.display = "none";

    createNewWorld();
    TimerGame = setInterval(update, 10);
    canlock = true;
}
controlsMenuButton.onclick = function(){
    clickSound.play();
    mainMenu.style.display = "none";
    controlsMenu.style.display = "block";
}

backButton.onclick = function(){
    clickSound.play();
    controlsMenu.style.display = "none";
    mainMenu.style.display = "block";
}