    var enterButton = document.getElementById('enterButton');
    var againButton = document.getElementById('againButton');
    var output = document.getElementById('outputText');
    var msg3 = document.getElementById("message3");
    var guessed_nums = [];

    var randomNumber = Math.ceil(Math.random()*100);

    function checkNumber(){
      var input = document.getElementById('userInput').value;
      if(input == randomNumber){
        output.innerHTML="You guessed right "+ ", "+ " it was "+ randomNumber;
        output.style.color="green";
        guessed_nums.push(input);
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }
      else if(input>randomNumber && input<100){
        output.innerHTML="You guessed too high";
        guessed_nums.push(input);
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }
      else if(input<randomNumber && input>1){
        output.innerHTML="You guessed too low";
        guessed_nums.push(input);
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }
      else if(input<1){
        output.innerHTML="Higher, it has to be between 1 and 100";
        guessed_nums.push(input);
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }
      else if(isNaN(input)){
        output.innerHTML="That's not a number!";
        guessed_nums.push(input);
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }
      else{
        output.innerHTML="Lower, it has to be between 1 and 100";
        guessed_nums.push(input);
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }

    }

    enterButton.addEventListener('click', checkNumber);
    againButton.addEventListener('click', function(){
      location.reload();
    })
console.log(guessed_nums);
