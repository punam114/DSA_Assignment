function outerFunction(){
    let message = "Hello People!";
    
    function innerFunction(){
      console.log(message);
    }
    innerFunction();
  }
  
  outerFunction();