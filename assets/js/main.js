// Input Nome do pokemon e botão
const pokemon = document.getElementById("input-text");
const btn = document.querySelector(".nav__input-btn");

let campos = {
    
}

btn.addEventListener("click",() => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`;
  const div_img = document.querySelector(".content__pokemon-img");

  fetch(url)
  .then(response => response.json())
  .then(dados => { 
    console.log(dados)

    console.log("Nome " + dados.species.name) 
    // For para o selecionamento de Atributos dos arrays
    for(let i = 0; i < dados.abilities.length; i++){
        console.log("Habilidades " + dados.abilities[i].ability.name)
    }
    
    for(let i = 0; i < dados.forms.length; i++){
        console.log("Forma " + dados.forms[i].name)
    }

    for(let i = 0; i < dados.types.length; i++){
        console.log("Tipos " + dados.types[i].type.name)
    }

    console.log("Especie " + dados.species.name)
    console.log("Experiencia " + dados.base_experience)
    console.log("Altura " + dados.height)

    // img
    let img = document.createElement('img');
    img.setAttribute('src', dados.sprites.front_default);
    div_img.appendChild(img)
  })
	.catch((_) => {console.log(_)})
});
