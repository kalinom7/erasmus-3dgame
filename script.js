
//variables for movements
let PressLeft = false;
let PressRight = false;
let PressForward = false;
let PressBack = false;
let PressUp = false;

//if the key is pressed
document.addEventListener('keydown', (event) => {
    if( event.key == "w" || event.key == "ArrowUp"){
        PressForward = true;
    }
    if( event.key == "s" || event.key == "ArrowDown"){
        PressBack = true;
    }
    if( event.key == "a" || event.key == "ArrowLeft"){
        PressLeft = true;
    }
    if( event.key == "d" || event.key == "ArrowRight"){
        PressRight = true;
    }
    if ( event.key == " "){
        PressUp = true;
    }

})

//if the key is released
document.addEventListener('keyup', (event) => {
    if( event.key == "w" || event.key == "ArrowUp"){
        PressForward = false;
    }
    if( event.key == "s" || event.key == "ArrowDown"){
        PressBack = false;
    }
    if( event.key == "a" || event.key == "ArrowLeft"){
        PressLeft = false;
    }
    if( event.key == "d" || event.key == "ArrowRight"){
        PressRight = false;
    }
    if ( event.key == " "){
        PressUp = false;
    }
})

function player(x,y,z,rx,ry){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

let pawn = new player(0,0,0,0,0);
let world = document.getElementById("world");

function update(){
    //count movement
    dx = PressRight - PressLeft;
    dz = PressBack - PressForward;
    dy = PressUp;

    //add movement to the coordinates
    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    pawn.z = pawn.z + dz;

    //change coordinates of the world
    world.style.transform = "translate3d(" + (-pawn.x) +"px," + (-pawn.y) +"px," + (-pawn.z) +"px)";
}

TimerGame = setInterval(update, 10);