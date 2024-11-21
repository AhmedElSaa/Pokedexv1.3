"use strict";
// Le JSON est en anglais
const url = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json';
let pokemons = [];
fetch(url)
    .then(blob => blob.json())
    .then(data => pokemons.push(...data.pokemon));
function trouverPokemon(recherche, pokemons) {
    return pokemons.filter(pokemon => {
        const regex = new RegExp(recherche, 'gi');
        return pokemon.name.match(regex) || pokemon.type.find((type) => type.match(regex));
    });
}
function afficherResultat() {
    const tabResult = trouverPokemon(this.value, pokemons);
    const html = tabResult.map(pokemon => {
        return `
        <li>
        <img src='${pokemon.img}' alt='pokeImg'/>
        <span>${pokemon.name}<span>
        </li>
        `;
    }).join('');
    result.innerHTML = html;
}
const input = document.querySelector('input');
const result = document.querySelector('ul');
input.addEventListener('change', afficherResultat);
input.addEventListener('keyup', afficherResultat);
