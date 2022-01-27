
// Create new board
function newGame(){
    generateSquares(promptForNewSquares());

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

    let squareArray = [];
    
    for (y = 1; y <= numOfSquares; y++){
        for (x = 1; x <= numOfSquares; x++){
            let colorSquare = document.createElement("div");
            colorSquare.setAttribute('id', `square${y}.${x}`)
            colorSquare.classList.add('colorSquare');
            colorSquare.setAttribute('style', `height: ${height}; width: ${width}`);
            sketchPad.appendChild(colorSquare);
            squareArray.push(colorSquare);
            colorSquare.addEventListener('mouseenter', colorOnHover);
        }
    }

    return(squareArray);
}

//Logic for square size
function determineSquareSize(numOfSquares){
    let size = (600/numOfSquares);
    return(size);
}

// Logic for determining color in eventListeners
function colorOnHover(e){
    e.currentTarget.classList.add('scratched');
}

//Outermost scope, where eventListeners live
function mainGame(){
    generateSquares(16);

    const newButton = document.querySelector('.newGame');
    const clearButton = document.querySelector('.clearBoard');

    newButton.addEventListener('click', newGame);
    clearButton.addEventListener('click', clearGame);
}

mainGame();

// module.exports = determineSquareSize;