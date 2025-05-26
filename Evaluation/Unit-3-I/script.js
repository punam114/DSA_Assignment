let url ='https://unit-3-1-default-rtdb.firebaseio.com/students.json';

async function displayData(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    Object.values(data).forEach((ele)=>{
        let box = document.getElementById("box");
        let card = document.createElement("div");

        let name = document.createElement("h2");
        name.innerHTML ="Name :" + ele.name;

        let age = document.createElement("h2");
        age.innerHTML ="Age :" + ele.age;

        let grade = document.createElement("h2");
        grade.innerHTML ="Grade :" + ele.grade;

        let score = document.createElement("h2");
        score.innerHTML ="Score :" + ele.score;

        let section = document.createElement("h2");
        section.innerHTML ="Section :" + ele.section;

        let btn1 = document.createElement("button");
        btn1.id = "edit";
        btn1.innerText = "Edit";

        let btn2 = document.createElement("button");
        btn2.innerText = "Delete";
        btn2.id = "delete" ;

        card.append(name,age,grade,score,section,btn1,btn2);
        box.append(card);
        
    })
}

displayData()