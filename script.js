

let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed');


let values = [
    '😃','😇','😶', '🌒', '😻', '🌜', '😠'
]

function getRandomValue(){
    return values[Math.floor(Math.random()*7)]
}

let animationId;

function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId);

    // 300 is the milliseconds in which the elements will change
    setInterval(() => {
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()

        
    },1000/newSpeed);
}

// function winornot(){
//     if(value1 == value2 && value1 == value3) {
//         alert("you win!!");
//         console.log(value1);
//     }
// }



inpSpeed.onchange = function(ev){
    // console.log('value changed')
    // document.documentElement => this is to access root variable of CSS
    document.documentElement.style.setProperty('--speed', ev.target.value);
    updateAnimation(ev.target.value);

}



