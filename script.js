document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timer');
    let secondsLeft = 3;
  
    function countdown() {
      timerDisplay.textContent = secondsLeft;
      secondsLeft--;
  
      if (secondsLeft < 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Time\'s up!';
      }
    }
  
    countdown();
    const timerInterval = setInterval(countdown, 1000);
  });
  