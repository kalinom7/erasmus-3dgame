//world constant 
var deg = Math.PI/180;


function player(x,y,z,rx,ry){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

//variables for movement 
var PressLeft = 0;
var PressRight = 0;
var PressForward = 0;
var PressBack = 0;
var PressUp = 0;
var MouseX = 0;
var MouseY = 0;
var lock = false;

//link variable to container
var container = document.getElementById("container");
//if the mouse is pressed

container.onclick = function(){
    container.requestPointerLock();
}

//locked mouse listener
document.addEventListener('pointerlockchange', (event) =>{
    lock = !lock;
})
//if the key is pressed 
document.addEventListener("keydown", (event) => {
    if (event.key == "w"){
        PressForward = 1;
    }
    if (event.key == "s"){
        PressBack = 1;
    }
    if (event.key == "d"){
        PressRight = 1;
    }
    if (event.key == "a"){
        PressLeft = 1;
    }
    if (event.key == " "){
        PressUp = 1;
    }
})

//if the key is relealised 
document.addEventListener("keyup", (event) =>{
    if (event.key == "w"){
        PressForward = 0;
    }
    if (event.key == "s"){
        PressBack = 0;
    }
    if (event.key == "d"){
        PressRight = 0;
    }
    if (event.key == "a"){
        PressLeft = 0;
    }
    if (event.key == " "){
        PressUp = 0;
    }
})
document.addEventListener("keydown", function(event) {
         if (event.key == "ArrowLeft"){
            PressLeft = 1;
         } else if (event.key == "ArrowUp"){
            PressForward = 1;
         } else if (event.key == "ArrowRight"){
            PressRight = 1;
         } else if (event.key == "ArrowDown"){
            PressBack = 1;
         }
      });

document.addEventListener("keyup", function(event) {
         if (event.key == "ArrowLeft"){
            PressLeft = 0;
         } else if (event.key == "ArrowUp"){
            PressForward = 0;
         } else if (event.key == "ArrowRight"){
            PressRight = 0;
         } else if (event.key == "ArrowDown"){
            PressBack = 0;
         }
      });
    
// mouse movement listener 
document.addEventListener("mousemove", (event) =>{
    MouseX = event.movementX;
    MouseY = event.movementY;
}) 

var pawn = new player(0,0,0,0,0);
var world = document.getElementById("world");

function update(){
    //count movement 
    dx = Math.cos(pawn.ry * deg) * (PressRight - PressLeft) - Math.sin(pawn.ry * deg) * (PressForward - PressBack); 
    dz = - (Math.sin(pawn.ry * deg) * (PressRight - PressLeft) + Math.cos(pawn.ry * deg) * (PressForward - PressBack));
    dy = -PressUp;
    drx = MouseY;
    dry = - MouseX;
    MouseX = MouseY = 0;

    //add movement to the coordinate 
    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    pawn.z = pawn.z + dz;
    if(lock){
        pawn.rx = pawn.rx + drx;
        pawn.ry = pawn.ry + dry;
    }
   

    
    //change coordinate of the world 
    world.style.transform = "translateZ(600px)" + 
        "rotateX(" + (-pawn.rx) + "deg)" +
        "rotateY(" + (-pawn.ry) + "deg)" +
        "translate3d(" + (-pawn.x) +"px," + (-pawn.y) + "px," + (-pawn.z) + "px)";
}

TimerGame = setInterval(update, 10);