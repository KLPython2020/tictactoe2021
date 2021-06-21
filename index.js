"use strict"
const totalBoxes = 9
const boxes = document.querySelectorAll(".square")
console.log(boxes)
let winner = false
let player1 = true

async function isWinner(position){
    if(position === 0 || position === 8){
        let diagonal = await leftDiagonal(position)
        console.log(diagonal)
        let across = await horizontal(position)
        console.log(across)
        let upDown = await vertical(position)
        console.log(upDown)
        if(diagonal || upDown || across){
            console.log(`there is a winner!!!!!! ${boxes[position].innerHTML}`)
        }
    }
    else if(position === 6 || position === 2){
        let diagonal = await rightDiagonal(position)
        console.log(diagonal)
        let across = await horizontal(position)
        console.log(across)
        let upDown = await vertical(position)
        console.log(upDown)
        if(diagonal || upDown || across){
            console.log(`there is a winner!!!!!! ${boxes[position].innerHTML}`)
        }
    }
    else if(position === 4){
        let diagonal = await leftDiagonal(position)
        console.log(diagonal)
        let rdiagonal = await rightDiagonal(position)
        console.log(rdiagonal)
        let across = await horizontal(position)
        console.log(across)
        let upDown = await vertical(position)
        console.log(upDown)
        if(diagonal || rdiagonal || upDown || across){
            console.log(`there is a winner!!!!!! ${boxes[position].innerHTML}`)
        }else{
            console.log(`sorry no winner found`)
        }
    }
    else if(position === 3 || position === 1 || position === 5 || position === 7){
        let across = await horizontal(position)
        console.log(across)
        let upDown = await vertical(position)
        console.log(upDown)
        if(upDown || across){
            console.log(`there is a winner!!!!!! ${boxes[position].innerHTML}`)
        }else{
            console.log(`sorry no winner found`)
        }
    }
}
isWinner(7)
/* 
 checker is a function that takes 3 arguments: 
 1. current position clicked
 2. distance from current position to compare
 3. flag to check both left and right or up and down
 and it is used to check if there is 3 of the same "X" or "O"
 in each direction that is valid to compare for the current box chosen.
 If there is a set of 3, return true else return false
 */
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
/*
 The following functions below are used to decide 
 the distance away from the current box clicked.
*/

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
function rightDiagonal(pos){
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
function leftDiagonal(pos){
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
//console.log(ldiagnal(4))