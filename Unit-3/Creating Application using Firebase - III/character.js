let url = "https://akabab.github.io/starwars-api/api/all.json";

async function fetchData(page){
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);

    let box = document.getElementById("box");
    let button = document.createElement("button");
    button.innerText = "Detail"

    data.forEach((ele)=>{
        let card = document.createElement("div");
        card.innerHTML = `
            <img src="${ele.image}"></img>
           <h2>Name : ${ele.name}</h2>
           <h3>Species : ${ele.species}</h3>
           <h3>Gender : ${ele.gender}</h3> 
           <a href="detail.html?id=${ele.id}" target="_blank">View Details</a>
        `
        box.appendChild(card);
    })

}
let currentPage = 1;
function nextPage() {
  currentPage++;
  fetchCharacters(currentPage);
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    fetchCharacters(currentPage);
  }
}

fetchData(currentPage)










