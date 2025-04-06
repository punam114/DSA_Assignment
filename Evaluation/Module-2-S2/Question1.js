// Implement a function called createStudentManager() that securely manages student 
// data using closures for data privacy.
// The function should return the following methods:
// addStudent – Adds a new student with the following structure:
// updateScore – Updates a student’s score for a given subject.
// getStudentDetails – Retrieves details of a specific student. If the student doesn’t 
// exist, return "Student Not Found".
// addSubject – Adds a new subject for a student with its score.

let student = [
    {
      name : "Avi",
      score : {
        maths : 33,
        science : 55,
        english : 76
      }
    },
    {
      name : "Punam",
      score : {
        maths : 53,
        science : 78,
        english : 96
      }
    },
    {
      name :"Shruti",
      score : {
        maths : 66,
        science : 73,
        english : 92
      }
    },
    {
      name : "Sonu",
      score : {
        maths : 56,
        science : 55,
        english : 45
      }
    }
    ]
  
  function createStudentManager(){
    console.log(addStudent("priya",{math:34,science:67,maths:89}));
    console.log(updateScore())
    console.log(getStudentDetails("piyush"))
    // console.log(addSubject ())
  }

createStudentManager()

function addStudent(name,score){
 student.push({name,score})
 return student;
}

function updateScore(){
    student[0].score.maths = 98;
    return student;
}

function getStudentDetails(name){
    return student.name ? name : "Student Not Found";
}

// function addSubject (){
//    student[0].subject["history"] = 56
//    return student;
// }

let totalScore = student.reduce((acc,cur) =>{
    return acc+cur.score.maths
    
},0)
console.log(totalScore)



































