import { getData } from "./Api.js";

const $btnAdd = document.getElementById("btnAdd");
const $txtPokeName = document.getElementById("txtPokeName");
const $pokedex = document.getElementById("pokedex");


$btnAdd.addEventListener("click",async ()=>{

    const URL = `https://pokeapi.co/api/v2/pokemon/`;
    const POKEMON = $txtPokeName.value.toLowerCase();
    

    const data = await getData(URL,POKEMON);
    addPokedex(data);

});


function addPokedex(pokemon){
    console.log(pokemon)

    const $card = document.getElementById("card-template").content;
    const $fragment = document.createDocumentFragment();
    
    const $pokeName = $card.querySelector(".card-title");
    $pokeName.textContent = pokemon.name;

    const $pokeImg = $card.querySelector(".card-img-top");
    $pokeImg.src = pokemon.sprites.other.dream_world.front_default;
    const $pokeType = $card.querySelector(".type");
    $pokeType.textContent = pokemon.types[0].type.name;
    const $pokeWeight = $card.querySelector(".weight");
    $pokeWeight.textContent = pokemon.weight;
    const $pokeAbilities = $card.querySelector(".abilities")
    $pokeAbilities.textContent = pokemon.abilities.length


    const clone = $card.cloneNode(true);
    $fragment.appendChild(clone)

    $pokedex.appendChild($fragment)

}
