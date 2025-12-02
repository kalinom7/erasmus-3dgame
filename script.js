//variables for movements
let PressLeft = false;
let PressRight = false;
let PressForward = false;
let PressBack = false;
let PressUp = false;
let MouseX = true;
let MouseY = false;

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

document.addEventListener('mousemove', (event) => {
    MouseX = event.movementX;
    MouseY = event.movementY;
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
    drx = MouseY;
    dry = - MouseX;
    MouseY =0;
    MouseX =0;

    
    //add movement to the coordinates
    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    pawn.z = pawn.z + dz;
    pawn.rx = pawn.rx + drx;
    pawn.ry = pawn.ry + dry;


    //change coordinates of the world
    world.style.transform = "translateZ(600px)"
    +"rotateX(" + (-pawn.rx) + "deg)" 
    +"rotateY(" + (-pawn.ry) + "deg)"
    + "translate3d(" + (-pawn.x) +"px," + (-pawn.y) +"px," + (-pawn.z) +"px)";
}

TimerGame = setInterval(update, 10);