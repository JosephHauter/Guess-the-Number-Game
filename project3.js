const randomnum = Math.floor(Math.random()*100);

const uInput = document.querySelector('.uInput');
const msg = document.querySelector('.msg');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const Hscore = document.querySelector('.Hscore');
const reset = document.querySelector('.reset');


let scoreval = 10;
let Hscoreval = 0;

function wrong(){
    scoreval --;
    score.textContent =`Score: ${scoreval}`;
    if (randomnum < uInput.value){
        msg.textContent='Your number is too high';
    }
    else{
        msg.textContent='Your number is too low';
    }
}
console.log(randomnum);

check.addEventListener('click', function() {

    if(scoreval>0){
        if (Number(uInput.value) === randomnum){
            msg.textContent = 'Congrats! You win!';
        }
        else{
            wrong();
        }
    }
   
})

reset.addEventListener('click', function() {

    scoreval = 10;
    score.textContent =`Score: ${scoreval}`;

})