//Outermost scope, where eventListeners live
function mainGame(){
    const sketchPad = document.querySelector('.sketchPad');
    
    generateSquares(16);
    
    
    
    const newButton = document.querySelector('.newGame');
    const clearButton = document.querySelector('.clearBoard');
    
    newButton.addEventListener('click', newGame);
    clearButton.addEventListener('click', clearGame);
    
    // Create new board
    function newGame(){
        clearGame();
        generateSquares(promptForNewSquares());
        
    }

    // Clear previous board instance
    function clearGame(){
        let squareNodeList = document.querySelectorAll('.colorSquare');
        squareNodeList.forEach(square => square.classList.remove('scratched'));
    }

    // Remove square nodes prior to new generation
    function removeSquares(){
        
    }

    // Create prompt returns numOfSquares
    function promptForNewSquares(){
        let numOfSquares = prompt("How many pixels?");
        return numOfSquares;
    }

    // Logic for populating board with squares
    function generateSquares(numOfSquares){
        
        
        // sketchPad.removeChild
        
        let height = `${(determineSquareSize(numOfSquares) - 2)}px`;
        let width = `${(determineSquareSize(numOfSquares)- 2)}px`;
        
        
        for (y = 1; y <= numOfSquares; y++){
            for (x = 1; x <= numOfSquares; x++){
                let colorSquare = document.createElement("div");
                colorSquare.setAttribute('id', `square${y}.${x}`)
                colorSquare.classList.add('colorSquare');
                colorSquare.setAttribute('style', `height: ${height}; width: ${width}`);
                sketchPad.appendChild(colorSquare);
                // squareArray.push(colorSquare);
                colorSquare.addEventListener('mouseenter', colorOnHover);
            }
        }
    
        // return(squareArray);
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


}

mainGame();

// module.exports = determineSquareSize;