let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
  for(let student in studentScores){
     if(studentScores[student] >= 90){
       console.log(student +" - "+"A");
     }
     else if(studentScores[student] >= 80 && studentScores[student] <90){
       console.log(student +" - "+"B");
     }
      else if(studentScores[student] >= 70 && studentScores[student] <80){
       console.log(student +" - "+"C");
     }
      else if(studentScores[student] >= 60 && studentScores[student] <70){
       console.log(student +" - "+"D");
     }
     else if(studentScores[student] < 60){
       console.log(student +" - "+"F")
     }
  }