function onComplete(message) {
    console.log(message);
  }
  
  function timer(duration, onComplete) {
    setTimeout(() => {
      onComplete("Timer finished after " + duration + "ms");
    }, duration);
  }
  
  timer(2000, onComplete);