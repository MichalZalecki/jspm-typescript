function pokemonCase(name:string) {
  return name
    .toLowerCase()
    .split("")
    .map((char, index) => index%2 ? char.toUpperCase() : char)
    .join("");
}

export default pokemonCase;
