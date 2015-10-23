import pokemonCase from "./lib/pokemon_case";

let header = document.querySelector("h1");
header.innerHTML = pokemonCase(header.textContent);
