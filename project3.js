const uInput = document.querySelector('.uInput');
const msg = document.querySelector('.msg');
const guessbox = document.querySelector('.guessbox');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const Hscore = document.querySelector('.Hscore');
const reset = document.querySelector('.reset');
const BigBox = document.querySelector('.BigBox');
const randomnum = Math.floor(Math.random()*100);
const guessed_nums =[];
const pic = document.getElementById('pic');


let scorepoint = 10;
let Hscorepoint = 0;


console.log(randomnum);

check.addEventListener('click', function() {
  // Is it a number??
  if(isNaN(uInput.value)||uInput.value ===""){
    msg.textContent = 'Not a Number'
  }
  else{// It is a number can play
    // Has points to play
    if(scorepoint>0){
        //Correct Number
        if (Number(uInput.value) === randomnum){
            Hscorepoint = scorepoint;
            Hscore.textContent =`High Score: ${Hscorepoint}`;
            msg.textContent = 'Congrats! You win!';
            BigBox.style.background = "#228B22";
        }
        //Wrong number
        else{
            guessed_nums.push(uInput.value);
            wrong();
            guessbox.textContent = guessed_nums;
        }
    }
    // No points left to play
    else {
      BigBox.style.background = "#DC143C";
      pic.src="./Images/game-over.png";
      msg.textContent= "YOU LOST";
    }
  }
})

function wrong(){
    scorepoint --;
    score.textContent =`Score: ${scorepoint}`;
    if (randomnum < uInput.value){
        msg.textContent='Your number is too high';
    }
    else{
        msg.textContent='Your number is too low';
    }
}

reset.addEventListener('click', function() {

    scorepoint = 10;
    score.textContent =`Score: ${scorepoint}`;
    BigBox.style.background = "black";


})
