

class TicTacToe{
    constructor(){
        this.board = Array(9).fill(null)
        this.userPlayer = 'X'
        this.bot = 'O'
    }

    markSpot(position){
        if (this.board[position] === null){
            this.board[position] = this.userPlayer
            if (!this.checkWin()){
                this.botsTurn()
            }
            return true
        }
        return false
    }

    botsTurn(){
        let availMoves = this.board.reduce((a, el, i) => {
            if (el === null) a.push(i)
            return a
        }, [])
        if (availMoves.length > 0){
            let random = availMoves[Math.floor(Math.random() * availMoves.length)]
            this.board[random] = this.bot
            return this.checkWin()
        }
        return null
    }
    checkWin(){
        const combosToWin = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

        for (let combo of combosToWin){
            const [a,b,c] = combo
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]){
                    return this.board[a]
                }
        }
        return this.board.includes(null) ? null : 'draw'
    }

    reset(){
        this.board = Array(9).fill(null)
        this.userPlayer = 'X'
        this.bot = 'O'
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe()
    const squares = document.querySelectorAll('.square')
    const xButton = document.getElementById('x')
    const oButton = document.getElementById('o')
    const topSection = document.querySelector('.first')

    xButton.addEventListener('click', () => startGame('X'))
    oButton.addEventListener('click', () => startGame('O'))

    function startGame(mark){
        game.userPlayer = mark
        game.bot = mark === 'X' ? 'O' : 'X'
        topSection.style.display = 'none'
        setBoard()
    }  
    
    function addEvListenersAtTop(){
        xButton.addEventListener('click', () => startGame('X'))
        oButton.addEventListener('click', () => startGame('O'))
    }

    addEvListenersAtTop()



    function setBoard(){
        squares.forEach((sq, i) => {
            sq.textContent = ''
            sq.makeMove = () => makeAMove(i)
            sq.addEventListener('click', () => sq.makeAMove)
        })
    }

    function makeAMove(i){
        if (game.markSpot(i)){
            changeSquare()
            checkIfOver()
        }
    }

    function changeSquare(){
        game.board.forEach((el, i) => {
            squares[i].textContent = el || ''
        })
    }

    function checkIfOver(){
        const result = game.checkWin()
        if (result){
            setTimeout(() => {
                if (result === 'draw'){
                    // create a box for this (or remove hidden class?)
                    console.log('its a draw')
                }else{
                    // create a box for this (or remove hidden class?)
                    console.log(`${result} wins`)
                }
                restartGame() // include w box from above?
            }, 400)
        }
    }

    function restartGame(){
        game.reset()
        topSection.style.display = 'flex'
        squares.forEach(sq => {
            sq.textContent = ''
            sq.removeEventListener('click', sq.makeMove)
        })
    }
})


// create new obj using class, get all occurrences of a square, get buttons by their id's, set variable equal to selection section
// put evLis on both buttons


// let player choose mark, set selection to obj's usermark and alternative to bots mark, set up board

// add ev Lis to all squares- clear any remaining marks and telling it to make a move for the specific index(as an argument), (use forEach w index to track which square is pressed)

// take index as param, use that to call the game's markspot method, if its true update the board and check the status of the game

// update the board using the games board array