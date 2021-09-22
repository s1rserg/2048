document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('#score')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let squares = []

    function createBoard() {
        for (let i = 0; i < width**2; i++) {
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
            
        }

        generate()
        generate()
    }

    createBoard()

    //generate a number 

    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
        } else generate()
    }

    //swipe right
    function swipeRight() {
        for (let i = 0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i + 3].innerHTML
                let row = [+totalOne, +totalTwo, +totalThree, +totalFour]
            }
        }
    }
    swipeRight()






})