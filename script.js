function mainGame(){
    const sketchPad = document.querySelector('.sketchPad');
    
    generateSquares(16);
    
    
    
    const newButton = document.querySelector('.newGame');
    const clearButton = document.querySelector('.clearBoard');
    
    newButton.addEventListener('click', newGame);
    clearButton.addEventListener('click', clearGame);

    
    function newGame(){
        let squareAmount = promptForNewSquares();
        clearGame();
        removeSquares();
        generateSquares(squareAmount);
        
    }
    

    //Change
    function clearGame(){
        let squareNodeList = document.querySelectorAll('.colorSquare');
        squareNodeList.forEach(square => square.classList.remove('scratched'));
    }

    function removeSquares(){
        let squareNodeList = document.querySelectorAll('.colorSquare');
        squareNodeList.forEach(square => sketchPad.removeChild(square));
    }

    function promptForNewSquares(){
        let numOfSquares = prompt("Enter the number of squares per side! \nMax is 100");
        numOfSquares = parseInt(numOfSquares);
        if (isNaN(numOfSquares)) {
            alert("Please enter a number!");
            return 16;
        }else if (numOfSquares > 100){
            alert("Uh oh! 100 is the max!");
            return 100;
        } else if (numOfSquares < 1){
            alert("That's asking the impossible");
            return 16;
        } else {
            return numOfSquares;
        }
    }

    function generateSquares(numOfSquares){
        
        
        
        let height = `${(determineSquareSize(numOfSquares) - 2)}px`;
        let width = `${(determineSquareSize(numOfSquares)- 2)}px`;
        
        
        for (y = 1; y <= numOfSquares; y++){
            for (x = 1; x <= numOfSquares; x++){
                let colorSquare = document.createElement("div");
                colorSquare.setAttribute('id', `square${y}.${x}`)
                colorSquare.classList.add('colorSquare');
                colorSquare.setAttribute('style', `height: ${height}; width: ${width}`);
                sketchPad.appendChild(colorSquare);
                colorSquare.addEventListener('mouseenter', colorOnHover);
            }
        }
    
    }
    
    function determineSquareSize(numOfSquares){
        let size = (600/numOfSquares);
        return(size);
    }


    function colorOnHover(e){
        e.currentTarget.style.backgroundColor =`rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

    function randomColor(){
        let ranColor = Math.floor(Math.random() * 256);
        
        return(ranColor);
    }

}

mainGame();

