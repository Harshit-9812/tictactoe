let cross = true
let circle = false 
let gameobject = {}
const boxes = Array.from(document.querySelectorAll(".item div"))
const result = document.getElementById("result")
console.log(boxes)
for(let i = 0;i < boxes.length;i++){
    boxes[i].onclick = function() {
        if(!(gameobject.hasOwnProperty(boxes[i].dataset.index))){
        boxes[i].innerHTML = turn(boxes[i].dataset.index)
        gamecheck()
        }
    }
}
function register(index,sign){
        gameobject[index] = sign
}
function turn(index){
    if(cross){
        cross = false
        circle = true
        register(index,"X")
        console.log(gameobject)
        return "X"
    }
    if(circle){
        cross = true
        circle = false
        register(index,"O")
        console.log(gameobject)
        return "O"
    }
}
function gamecheck() {
    if(((gameobject[0] == gameobject[1] && gameobject[0] == gameobject[2]) || (gameobject[0] == gameobject[3] && gameobject[0] == gameobject[6]) || (gameobject[0] == gameobject[4] && gameobject[0] == gameobject[8])) && gameobject[0] != undefined){
       
        result.innerHTML = gameobject[0] + " is the winner"
    }
    if((gameobject[1] == gameobject[4] && gameobject[1] == gameobject[7]) && gameobject[1] != undefined){
     
        result.innerHTML = gameobject[1] + " is the winner"
    }
    if(((gameobject[2] == gameobject[5] && gameobject[2] == gameobject[8]) || (gameobject[2] == gameobject[4] && gameobject[2] == gameobject[6])) && gameobject[2] != undefined){
       
        result.innerHTML = gameobject[2] + " is the winner"
    }
    if((gameobject[3] == gameobject[4] && gameobject[3] == gameobject[5]) && gameobject[3] != undefined){
     
        result.innerHTML = gameobject[3] + " is the winner"
    } 
    if((gameobject[6] == gameobject[7] && gameobject[6] == gameobject[8]) && gameobject[6]!= undefined){
        
        result.innerHTML = gameobject[6] + " is the winner"
    }
}