//Variables
const uInput = document.querySelector('.uInput');
const msg = document.querySelector('.msg');
const msg1 = document.querySelector('.msg1');
const msg2 = document.querySelector('.msg2');
const msg3 = document.querySelector('.msg3');
const side1 = document.querySelector('.side1');
const side2 = document.querySelector('.side2');
const guessbox = document.querySelector('.guessbox');
const check = document.querySelector('.check');
const score = document.querySelector('.score');
const Hscore = document.querySelector('.Hscore');
const reset = document.querySelector('.reset');
const BigBox = document.querySelector('.BigBox');
const trys = document.querySelector('.trys');
let randomnum = Math.floor(Math.random()*100);
let guessed_nums =[];
const pic = document.getElementById('pic');

//Starting Values
let scorepoint = 10;
let Hscorepoint = 0;


console.log(randomnum);

check.addEventListener('click', function() {
  // Is it a number??
  if(isNaN(uInput.value)||uInput.value ===""){
    msg.textContent = 'Not a Number';
  }
  else if(uInput.value>100 || uInput.value<1){
    msg.textContent = 'Please enter a number 1-100';
  }
  else{// It is a valid number can play
    // Has points to play
    if(scorepoint>1){
      //Correct Number
      if (Number(uInput.value) === randomnum){
        final();
      }
      //Wrong number
      else{
        if(!guessed_nums.includes(uInput.value)){  
          wrong();  
        }
        else {
          msg.textContent='Number has already been checked';
        }
      }
    }
    else{//last try
      if (Number(uInput.value) === randomnum){
        final();
      }
      //Wrong number
      else{
        if(!guessed_nums.includes(uInput.value)){  
          guessed_nums.push(uInput.value);
          guessbox.textContent = guessed_nums; //show guessed number
          loose();  
        }
        else {
          msg.textContent='Number has already been checked';
          
        }
      }
    }
  }
})

function wrong(){
  guessed_nums.push(uInput.value);//place guessed number in array
  scorepoint --;
  score.textContent =`Score: ${scorepoint}`;
  if (randomnum < uInput.value){
    msg.textContent='Your number is too high';
    }
  else{
    msg.textContent='Your number is too low';
  }
  guessbox.textContent = guessed_nums; //show guessed number
}

reset.addEventListener('click', origin);
trys.addEventListener('click', origin);

function origin(){
    scorepoint = 10;
    guessed_nums = [];
    guessbox.textContent = '';
    randomnum = Math.floor(Math.random()*100);
    score.textContent =`Score: ${scorepoint}`;
    BigBox.style.background = "black";
    pic.src="./Images/question.png";
    msg.textContent='Guess a Number';
    uInput.style.display = "inline";
    check.style.display = "inline";
    BigBox.style.border = "5px solid #db3eb1";
    // Reset textContent
    msg1.style.display = "none";
    msg2.style.display = "none";
    msg3.style.display = "none";
    trys.style.display = "none";
    // show
    side1.style.display = "inline";
    side2.style.display = "inline";
    console.log(randomnum);
}

function final(){
  if(scorepoint>=Hscorepoint){
    Hscorepoint = scorepoint;
  }
  Hscore.textContent =`High Score: ${Hscorepoint}`;
  msg.textContent = 'Congrats! You win!';
  BigBox.style.background = "#228B22";
  BigBox.style.border = "5px solid white";
  pic.src="./Images/trophy.png";
  uInput.style.display = "none";
  check.style.display = "none";
  side1.style.display = "none";
  side2.style.display = "none";
  msg1.textContent= `${randomnum} is the secret number`;
  msg2.textContent= `Your Score: ${scorepoint}`;
  msg3.textContent = `High Score: ${Hscorepoint} `
  msg1.style.display = "block";
  msg2.style.display = "block";
  msg3.style.display = "block";
  trys.style.display = "inline";
}

function loose(){
  score.textContent =`Score: 0`;
  BigBox.style.background = "#DC143C";
  pic.src="./Images/game-over.png";
  msg.textContent= "YOU LOST";
  msg1.textContent= `Don't give up!`;
  msg2.textContent= `${randomnum} was the secret number`;
  BigBox.style.border = "5px solid yellow";
  // Show
  msg1.style.display = "block";
  msg2.style.display = "block";
  trys.style.display = "inline";
  // Do not show
  uInput.style.display = "none";
  check.style.display = "none";
  msg3.style.display = "none";
  side2.style.display = "none";
}
