const list = document.getElementById("list");
const description = document.getElementById("description");

const api = "https://pokeapi.co/api/v2/pokemon?limit=150";

/**
 * Try to parse a response as JSON data
 */
function transformToJson (response) {
    if (response.ok) {
        return response.json();
    }

    throw Error("Content not loaded");
}

/**
 * Clear the list of all its items
 */
function emptyList () {
}

/**
 * Create an item, fetch its data and setup event listener
 */
function createItem (pokemon) {
    
    const item = document.createElement("li");
     
  const pics = document.createElement("img");
    

    fetch(pokemon.url).then(transformToJson).then((data) => {
        
        pokemon = {};
        /*pokemon['name'] = data.name;
        pokemon['id'] = data.id;
        pokemon['weight'] = data.weight;
        pokemon['height'] = data.height;
        pokemon['types'] = data.types;
        pokemon['sprites'] = data.sprites;*/
        item.textContent = data.name;
        list.appendChild(item); //li dans ul
        item.appendChild(pics); //pics dans li
        pics.src = data.sprites.front_default;

    });
    
}

/**
 * fill the item list with values
 */
function fillList (json) {
    emptyList();
    json.results.forEach(createItem);
    console.log(json);
}

/**
 * Fill and display the description
 */
function showDescription (data) {
    description.classList.add("show");
    const name = document.getElementsByClassName("name'");
    const ID = document.getElementsByClassName("id");
    const poids = document.getElementsByClassName("weight");
    const taille = document.getElementsByClassName("taille");
    const types = document.getElementsByClassName("types");

    const fields = description.querySelectorAll("dd");
    fields.forEach((dd) => {
       const name = data.name;
        
        
    });
}

/**
 * Hide the description
 */
function hideDescription () {
    description.classList.remove("show");
}

// Fetch the API end-point and fill the list
fetch(api).then(transformToJson).then(fillList);

