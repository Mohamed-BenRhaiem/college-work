const randomNumber = Math.floor(Math.random() * 10) + 1;

let attempt = 0;

const guessInput = document.getElementById('guess');

const submitButton = document.getElementById('submit-btn');

const resultDiv = document.getElementById('result');

const chancesDiv = document.getElementById('chances');

    if (attempt<6) {
         submitButton.addEventListener('click', (eo) => {
      const guess = Number(guessInput.value);
    
      if ( guess < 1 || guess > 10) {
        resultDiv.innerText = 'Please enter a valid number between 1 and 10.';
        attempt ++;
        if(6-attempt !==0) chancesDiv.innerText = `il vous reste ${6-attempt} chances`;
        else chancesDiv.innerText = `vous n'avez plus de chance`;
    
      }
    
      else if (guess === randomNumber) {
        resultDiv.innerText = `Felicitation! vous avez choisi le correct numéro(${randomNumber}).`;
        resultDiv.style.color = "green";
      } else if (guess < randomNumber) {
        resultDiv.innerText = 'trop petit. essayer à nouveau.';
        resultDiv.style.color = "red";
        
        attempt ++;
        if(6-attempt !==0) chancesDiv.innerText = `il vous reste ${6-attempt} chances`;
        else chancesDiv.innerText = `vous n'avez plus de chance`;

    
      } else {
        resultDiv.innerText = ' trop grand. essayer à nouveau.';
        resultDiv.style.color = "red";
        
        attempt ++;
        if(6-attempt !==0) chancesDiv.innerText = `il vous reste ${6-attempt} chances`;
        else chancesDiv.innerText = `vous n'avez plus de chance`;
    
      }
    
      guessInput.value = '';
      guessInput.focus();
      if (attempt === 6) {
        resultDiv.innerText = 'tu as perdu la partie';
        resultDiv.style.color = 'red';
        eo.currentTarget.style.opacity = '0.5';
        eo.currentTarget.style.pointerEvents = 'none';
        setTimeout(() => {
            resultDiv.innerText = 'la prochaine jeu début dans quelques secondes';

        }, 2000);
        setTimeout(() => {
            window.location.reload();
        }, 5000);
    } 
    });


    }
   