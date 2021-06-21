"use strict"
const totalBoxes = 9
const boxes = document.querySelectorAll(".square")
console.log(boxes)
let winner = false
let player1 = true

function isWinner(position){
    
}
function checker(pos, num, flag){
    console.log(`checker pos::::: ${pos}`)
    const player = boxes[pos].innerHTML
    console.log(`checker player::::: ${player}`)
    let counter = 0
    for(let i = 1; i < 3; i++){
        if(flag && (i === 2)){
            console.log(`entered`)
            console.log(`checker move::::: ${pos - num}`)
            console.log(`checker if statement ::: ${boxes[pos - num].innerHTML}`)
            if(boxes[pos - num * 1].innerHTML === player){
                counter++
            }   
        }
        else if(boxes[pos + num * i].innerHTML === player){
            console.log(`checker move 2::::: ${pos + num * i}`)
            console.log(`checker else if statement ::: ${boxes[pos + num * i].innerHTML}`)
            counter++
        }
        console.log(counter)
    }
    console.log(`checker counter::::: ${counter}`)
    return counter === 2 ? true : false
    
}
function horizontal(pos){
    console.log(pos)
    if(pos === 0 || pos === 1 || pos === 2){
       return checker(pos, 3)
    }
    else if(pos === 6 || pos === 7 || pos === 8){
        return checker(pos, -3)
    }
    else if(pos === 3 || pos === 4 || pos === 5){
        return checker(pos, 3, true)
    }
}
function vertical(pos){
    console.log(pos)
    if(pos === 0 || pos === 3 || pos === 6){
       return checker(pos, 1)
    }
    else if(pos === 2 || pos === 5 || pos === 8){
        return checker(pos, -1)
    }
    else if(pos === 1 || pos === 4 || pos === 7){
        return checker(pos, 1, true)
    }
}
function rdiagnal(pos){
    console.log(pos)
     if(pos === 2){
        return checker(pos, 2)
    }
    else if(pos === 6){
        return checker(pos, -3)
    }
    else if(pos === 4){
        return checker(pos, 2, true)
    }
}
function ldiagnal(pos){
    console.log(pos)
     if(pos === 0){
        return checker(pos, 4)
    }
    else if(pos === 8){
        return checker(pos, -4)
    }
    else if(pos === 4){
        return checker(pos, 4, true)
    }
}
console.log(ldiagnal(4))