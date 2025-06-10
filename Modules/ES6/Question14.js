let input = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    ]
    
    // Output: [
    // { name: "David", performance: "Excellent" },
    // { name: "Alice", performance: "Excellent" },
    // { name: "Charlie", performance: "Good" }
    // ]
    
    // 1.Filter the employees who have completed more than 5 tasks.
    // 2.Map the filtered employees to a new array that contains only the employee's name and their performance level. The performance level is determined by the following criteria:
    // 3.If rating is above 4.5, their performance level is "Excellent".
    // 4.If rating is between 3 and 4.5 (inclusive), their performance level is "Good".
    // 5.Otherwise, their performance level is "Needs Improvement".
    // 6.Sort the final array of employees in descending order based on their performance level, prioritizing "Excellent", then "Good", and finally "Needs Improvement".
    // 7.Return the final sorted array containing the employee names and their performance levels.
    //let updatedUsers = users.map(user => ({ ...user, country: "USA" }));
    
    function people(data){
        let s1 = data.filter(e => e.tasksCompleted > 5)
                  .map((e,i) => {
                    if(e.rating > 4.5){
                      console.log("Excellent")
                    }
                    else if(e.rating >3 && e.rating<4.5){
                      return "Good";
                    }
                    else{
                      return  "Needs Improvement";
                    }
                  })
        return s1;
    }
    
    people(input);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    