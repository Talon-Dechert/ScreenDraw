
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
    
    let height = `${(determineSquareSize(numOfSquares) - 2)}px`;
    let width = `${(determineSquareSize(numOfSquares)- 2)}px`;

    // let squareArray = [];
    
    for (y = 1; y <= numOfSquares; y++){
        for (x = 1; x <= numOfSquares; x++){
            let colorSquare = document.createElement("div");
            colorSquare.setAttribute('id', `square${y}.${x}`)
            colorSquare.classList.add('colorSquare');
            colorSquare.setAttribute('style', `height: ${height}; width: ${width}`);
            sketchPad.appendChild(colorSquare);
        }
    }

    return;
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

// generateSquares(100);

// module.exports = determineSquareSize;