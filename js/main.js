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

squares.forEach(square => {
    square.addEventListener('click', (ev) =>{

    })
})


class Spot{
    constructor(val,turn){
        this._val = val
        this._turn = turn
    }
    get val(){
        return this._val
    }

    get turn(){
        return this._turn
    }


    display(sq, turn){
        const spot = new Spot(sq, turn)
        // if spot has htmlclass 1,2,3,...?
        // that html class' text content = 0
        // call checkwin with the newly created this
    }

    update(val, turn){
        // if this turn is x, now its o
        // or if this turn is o, now its x

    }

    checkWin(val, turn){
        // if this.val === (this.val[i + 1] && this.val === (this.val[i + 2] || this.val[i - 1])) || (this.val === this.val[i-1] && this.val === this.val - 2)
        // if this.val === (this.val[i + 3] && this.val === (this.val[i + 6] || this.val[i - 3])) || (this.val === this.val[i-3] && this.val === this.val - 6)
        // call win with thisvalue
        // else call update with this.val and this.turn
    }
}

