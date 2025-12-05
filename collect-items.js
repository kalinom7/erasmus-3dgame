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
    iteration(keys,"key");
}