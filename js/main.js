// create an object with 9 properties, numbered 1-9
//    and a this.val of x or o buttons click

// create an array from the squares

// call the method on the object using the index it matches from the array to update the this.value of the property on the object

// call the method on the object to update the text content of the square that was clicked on to this.value

// update the value to be changed from x -> o or vice cersa











document.getElementById('x').addEventListener



let squares= document.querySelectorAll('.square')

squares = Array.from(squares)

console.log(squares)

squares.forEach((square, index) => {
    square.addEventListener('click', (ev) =>{
        ev.preventDefault()
        game.setValue(index)
    })
})


class Spot{
    constructor(val){
        this._val = val
        this._index
        this[0]
        this[1]
        this[2]
        this[3]
        this[4]
        this[5]
        this[6]
        this[7]
        this[8]
    }




    setVal(index){
        this[index] = this._val
        this.checkWin(this._val, index)


    }

    checkWin(val, turn){
        // if this.val === (this.val[i + 1] && this.val === (this.val[i + 2] || this.val[i - 1])) || (this.val === this.val[i-1] && this.val === this.val - 2)
        // if this.val === (this.val[i + 3] && this.val === (this.val[i + 6] || this.val[i - 3])) || (this.val === this.val[i-3] && this.val === this.val - 6)
        // call win with thisvalue
        // else call update with this.val and this.turn
    }
}

