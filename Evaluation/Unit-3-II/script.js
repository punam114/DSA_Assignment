let url = "https://rickandmortyapi.com/api/character"

let CharacterData = [];
//fetch data
async function fetchData(){
    let res = await fetch(url);
    let data = await res.json();
     CharacterData = [...data.results]
    console.log(data.results)
    displayData(data.results)
}

function displayData(character){
    let box = document.getElementById("box");
    box.innerHTML = "";

    character.forEach((ele)=>{
        let card = document.createElement("div");
        card.innerHTML = `
        <img src="${ele.image}" alt="${ele.name}">
        <h2>Name : ${ele.name}</h2>
        <h3>Species : ${ele.species}</h3>
        <h3>Status : ${ele.status}</h3>
        <h3>Location : ${ele.location.name}</h3>
        `
        box.append(card)
    })
}

//search with debouncing
let timer;
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click",()=>{
    searchVal = searchInput.value;

    let filtered = CharacterData.filter((data)=>
        data.name.toLowerCase().includes(searchVal.toLowerCase())
    );
  searchInput.value = "";
clearTimeout(timer);
timer = setTimeout(()=> {
    displayData(filtered)
    console.log("data fetched")
},3000)
})

//filter status
let statusFilter = document.getElementById("statusfilter");
statusFilter.addEventListener("change",()=>{
    let filterVal = statusFilter.value;
    let filteredStatus = CharacterData.filter((data) =>
       data.status.toLowerCase().includes(filterVal.toLowerCase())
)
 displayData(filteredStatus)
 console.log(filteredStatus)
})

//filter spices
let spicesFilter = document.getElementById("spicesfilter");
spicesFilter.addEventListener("change",()=>{
    let filterVal = spicesFilter.value;
    let filteredSpices = CharacterData.filter((data) =>
       data.species.toLowerCase().includes(filterVal.toLowerCase())
)
 displayData(filteredSpices)
 console.log(filteredSpices)
})




fetchData()












