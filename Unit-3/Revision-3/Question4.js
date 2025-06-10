let person = { role: "admin", experience: 7, active: true, department: "IT" };

// let person = { role: "manager", experience: 4, active: true, department: "Marketing" };

// let person = { role: "user", experience: 2, active: true, department: "Support" };

// let person = { role: "admin", experience: 3, active: false, department: "Finance" };

// For the "admin" role:
if(person.active == true){
  if(person.experience>5 && person.department == "IT"){
    console.log("Full IT Admin Access");
  }
  else if(person.experience>5 && person.department !== "IT"){
    console.log("Full General Admin Access");
  }
  else if(person.experience<=5 ){
    console.log("Limited Admin Access");
  }
  else{
    console.log("Admin Access Revoked");
  }
}

// For the "manager" role:
if(person.active == true){
  if(person.experience>3 && person.department == "Sales"){
    console.log("Full Sales Manager Access");
  }
  else if(person.experience>5 && person.department !== "IT"){
    console.log("Full Manager Access");
  }
  else if(person.experience<=5 ){
    console.log("Limited Manager Access");
  }
  else{
    console.log("Manager Access Revoked");
  }
}

// For the "user" role:
if(person.active == true){
  if(person.department == "Support"){
    console.log("Priority Support Access" );
  }
  else if(person.department !== "Support"){
    console.log("User Access");
  }
  else{
    console.log("Manager Access Revoked");
  }
}















