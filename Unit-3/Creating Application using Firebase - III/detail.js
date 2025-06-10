function getCharacterId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

async function detailData(){

    const id = getCharacterId();

    let res = await fetch(`https://akabab.github.io/starwars-api/api/all.json${id}`);
    let data = await res.json();
 
    let box = document.getElementById("box");

        let card = document.createElement("div");
          card.innerHTML = `
        <img src="${ data.image}" alt="${ data.name}" width="200">
        <div id="innerBox">
          <h3>Name: ${ data.name}</h3>
          <h3>Gender: ${ data.gender}</h3>
          <h3>Species: ${ data.species}</h3>
          <h3>Homeworld: ${ data.homeworld}</h3>
          <h3>Affiliations: ${ data.affiliations}</h3>
          <h3>Height: ${ data.height}</h3>
          <h3>Mass: ${ data.mass}</h3>
          <h3>Eye Color: ${ data.eyeColor}</h3>
          <h3>Hair Color: ${ data.hairColor}</h3>
          <h3>Skin Color: ${ data.skinColor}</h3>
        </div>
      `;
      box.appendChild(card);

}

detailData()