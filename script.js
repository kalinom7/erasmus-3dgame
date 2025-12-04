//world constant 
var deg = Math.PI/180;


function player(x,y,z,rx,ry){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
}

//rectangle Array [x,y,z,rx,ry,rz,w,h,color]
const map = [
    [0,0,-1000,0,0,0,2000,200,"patterns/brick_crosswalk_diff_1k.jpg"],  // front wall
    
    [0,0,1000,0,180,0,2000,200,"patterns/brick_crosswalk_diff_1k.jpg"], // back wall (obrócona 180)
    
    [1000,0,0,0,-90,0,2000,200,"patterns/brick_crosswalk_diff_1k.jpg"], // right wall
    
    [-1000,0,0,0,90,0,2000,200,"patterns/brick_crosswalk_diff_1k.jpg"], // left wall
    
    [0,100,0,90,0,0,2000,2000,"patterns/plank_flooring_04_diff_1k.jpg"],  // floor
    
    [0,20,-1000,0,0,0,80,180,"patterns/door.png"], //door on front wall
    [1000,50,0,0,-90,0,360,360,"patterns/window.png"], //window on right wall
    

// left vertical long
[ -700, 0, 300, 0, 90, 0, 600, 200, "#0077ff" ],

// top long horizontal
[ 0, 0, -600, 0, 0, 0, 900, 200, "#0077ff" ],

// right small top
[ 700, 0, -300, 0, 0, 0, 150, 200, "#0077ff" ],

// mid tall left
[ -200, 0, -200, 0, 90, 0, 400, 200, "#0077ff" ],

// middle small horizontal
[ 150, 0, -100, 0, 0, 0, 350, 200, "#0077ff" ],

// right vertical long
[ 600, 0, 50, 0, 90, 0, 450, 200, "#0077ff" ],

// bottom right horizontal
[ 400, 0, 350, 0, 0, 0, 600, 200, "#0077ff" ],

// bottom left horizontal
[ -400, 0, 350, 0, 0, 0, 400, 200, "#0077ff" ],

// small vertical bottom left
[ -450, 0, 50, 0, 90, 0, 250, 200, "#0077ff" ],

// lower middle vertical
[ 50, 0, 200, 0, 90, 0, 250, 200, "#0077ff" ],

// next to back wall
[500,0,700,0,180,0,700,200,"#0077ff"],
[-400,0,600,0,180,0,300,200,"#0077ff"],
[-100,0,500,0,90,0,700,200,"#0077ff"],
 [-600,0,-300,0,0,0,600,200,"#0077ff"],


    
];

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
        PressForward = 1;
    }
    if (event.key == "s" || event.key == "ArrowDown"){
        PressBack = 1;
    }
    if (event.key == "d" || event.key == "ArrowRight"){
        PressRight = 1;
    }
    if (event.key == "a" || event.key == "ArrowLeft"){
        PressLeft = 1;
    }
    if (event.key == " "){
        PressUp = 1;
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
    for (let i = 0; i < map.length; i++){

        //create rectangles and styles
        let newElement = document.createElement("div");
        newElement.className = "square";
        newElement.id = "square" + i;
        newElement.style.width = map[i][6] + "px";
        newElement.style.height = map[i][7] + "px";
        newElement.style.background = map[i][8];
        newElement.style.backgroundImage = "url("+ map[i][8] +")";
        

        //position
        newElement.style.transform = "translate3d(" 
        + (600 - map[i][6]/2 + map[i][0]) + "px," 
        + (400 -map[i][7]/2 + map[i][1]) + "px," 
        + map[i][2] + "px)"
        +"rotateX(" + map[i][3] + "deg)"
        +"rotateY(" + map[i][4] + "deg)"
        +"rotateZ(" + map[i][5] + "deg)";

        //insert into the world
        world.append(newElement);
    }
}

//generate new world
createNewWorld();

TimerGame = setInterval(update, 10);