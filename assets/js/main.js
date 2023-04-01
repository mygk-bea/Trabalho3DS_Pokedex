// Input Nome do pokemon e botão
const pokemon = document.getElementById("a");
const btn = document.querySelector(".nav__input-btn");

const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.value}`;

btn.addEventListener("click",()=>{
    console.log(pokemon.value + " console.log")
    fetch(url)
    .then(response => response.json())
    .then(dados => { console.log(dados.species) })
	.catch((_) => { console.log(_) })
});
