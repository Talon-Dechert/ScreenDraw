
// Create new board
function newGame(){
    
}

// Clear previous board instance
function clearGame(){
    
}

// Create prompt returns numOfSquares
function promptForNewSquares(){
    
}

// Logic for populating board with squares
function generateSquares(numOfSquares){

    let sketchPad = document.querySelector('.sketchPad');
    
    let height = `${(determineSquareSize(numOfSquares) - 1)}px`;
    let width = `${(determineSquareSize(numOfSquares)- 1)}px`;
    
    for (i = numOfSquares; i <= numOfSquares; i++){
        for (i = numOfSquares; i <= numOfSquares; i++){
            let colorSquare = document.createElement("div");
            colorSquare.classList.add('colorSquare');
            colorSquare.setAttribute('style', `height: ${height}; width: ${width}`);
            sketchPad.appendChild(colorSquare);
        }
    }
}

//Logic for square size
function determineSquareSize(numOfSquares){
    let size = (800/numOfSquares);
    return(size);
}

// Logic for generating color
function colorOnHover(){
    
}


// Main game, assigns all eventListeners
function sketchGame(numOfSquares){
    generateSquares(numOfSquares);
}

module.exports = determineSquareSize;