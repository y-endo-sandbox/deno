const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
const data = await res.json();
console.log(data);
