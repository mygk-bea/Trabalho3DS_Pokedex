// Input Nome do pokemon e botão
const pokemon = document.getElementById("input-text");
const btn = document.querySelector(".nav__input-btn");


btn.addEventListener("click",() => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.value}`;

  fetch(url)
  .then(response => response.json())
  .then(dados => { 
    console.log(dados.species) 
  })
	.catch((_) => {console.log(_)})
});
