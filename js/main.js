

class TicTacToe{
    constructor(){
        this.board = Array(9).fill(null)
        this.userPlayer = 'X'
        this.bot = 'O'
    }

    markSport(position){
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
        }
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
    }
}