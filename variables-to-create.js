 const coins = [
    [300,30,-500,0,0,0,50,50,"#FFFF00"], // first 2d coin
    [-300,30,800,0,0,0,50,50,"#FFFF00"], // second 2d coin
    [-100,50,-200,0,0,0,50,50,"#FFFF00"], // third 2d coin
]

 const keys = [
    [900,30,900,0,0,0,50,50,"#FF0000"]
]

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