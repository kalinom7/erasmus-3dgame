

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
var canlock = false;

//link variable to container
var container = document.getElementById("container");
//if the mouse is pressed

container.onclick = function(){
    if(canlock) container.requestPointerLock();
}

//locked mouse listener
document.addEventListener('pointerlockchange', (event) =>{
    lock = !lock;
})
//if the key is pressed 
document.addEventListener("keydown", (event) => {
    if (event.key == "w" || event.key == "ArrowUp"){
        PressForward = 5;
    }
    if (event.key == "s" || event.key == "ArrowDown"){
        PressBack = 5;
    }
    if (event.key == "d" || event.key == "ArrowRight"){
        PressRight = 5;
    }
    if (event.key == "a" || event.key == "ArrowLeft"){
        PressLeft = 5;
    }
    if (event.key == " "){
        PressUp = 5;
    }
})

//if the key is relealised 
document.addEventListener("keyup", (event) =>{
    if (event.key == "w" || event.key == "ArrowUp"){
        PressForward = 0;
    }
    if (event.key == "s" || event.key == "ArrowDown"){
        PressBack = 0;
    }
    if (event.key == "d" || event.key == "ArrowRight"){
        PressRight = 0;
    }
    if (event.key == "a" || event.key == "ArrowLeft"){
        PressLeft = 0;
    }
    if (event.key == " "){
        PressUp = 0;
    }
})

    
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

function createNewWorld(){
   CreateSquares(map, "map");
}

function CreateSquares(squares, name){
     for (let i = 0; i < squares.length; i++){

        //create rectangles and styles
        let newElement = document.createElement("div");
        newElement.className = name + " square";
        newElement.id = "square" + i;
        newElement.style.width = squares[i][6] + "px";
        newElement.style.height = squares[i][7] + "px";
        newElement.style.background = squares[i][8];
        newElement.style.backgroundImage = "url("+ squares[i][8] +")";
        

        //position
        newElement.style.transform = "translate3d(" 
        + (600 - squares[i][6]/2 + squares[i][0]) + "px," 
        + (400 -squares[i][7]/2 + squares[i][1]) + "px," 
        + squares[i][2] + "px)"
        +"rotateX(" + squares[i][3] + "deg)"
        +"rotateY(" + squares[i][4] + "deg)"
        +"rotateZ(" + squares[i][5] + "deg)";

        //insert into the world
        world.append(newElement);
    }
}