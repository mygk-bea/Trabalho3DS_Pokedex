// Input Nome do pokemon e botão
const pokemon = document.getElementById("input-text");
const btn = document.querySelector(".nav__input-btn");

function spritesPokemon(json){
  if(json.id <= 649) {
    return json.sprites.versions["generation-v"]["black-white"].animated.front_default
  } else {
    return json.sprites.other["official-artwork"].front_default
  }
}

btn.addEventListener("click",() => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.value.toLowerCase()}`;

  // Pegar classes
  let pokemonDados = {
      img : document.querySelector(".content__pokemon-img"),
      nome : document.querySelector(".content__pokemon-nome"),
      habilidades : document.querySelector(".content__pokemon-habilidades"),
      formas : document.querySelector(".content__pokemon-formas"),
      especie : document.querySelector(".content__pokemon-especie"),
      tipo : document.querySelector(".content__pokemon-tipo"),
      experiencia : document.querySelector(".content__pokemon-experiencia"),
      altura : document.querySelector(".content__pokemon-altura")
  };

  fetch(url)
  .then(response => response.json())
  .then(dados => { 
    console.log(dados)

    // img
    let img = document.createElement('img');
    img.setAttribute('src', spritesPokemon(dados));
    pokemonDados.img.innerHTML = '';
    pokemonDados.img.appendChild(img);

    // Nome
    let nome = document.createElement('h1');
    nome.innerHTML = dados.species.name;
    pokemonDados.nome.innerHTML = '';
    pokemonDados.nome.appendChild(nome);


    // For para o selecionamento de Atributos dos arrays

    // Habilidades      
    pokemonDados.habilidades.innerHTML = '<h3>Habilidades</h3>';
    dados.abilities.forEach(item => {
      let habilidades = document.createElement('p');
      habilidades.innerHTML = item.ability.name;
      pokemonDados.habilidades.appendChild(habilidades);
    });
    
    // Formas
    pokemonDados.formas.innerHTML = '<h3>Formas</h3>';
    dados.forms.forEach(item => {
      let formas = document.createElement('p');
      formas.innerHTML = item.name;
      pokemonDados.formas.appendChild(formas);
    });

    // Especies
    pokemonDados.especie.innerHTML = '<h3>Espécie</h3>';
    let especies = document.createElement('p');
    especies.innerHTML = dados.species.name;
    pokemonDados.especie.appendChild(especies);

    // Tipos
    pokemonDados.tipo.innerHTML = '<h3>Tipo</h3>';
    dados.types.forEach(item => {
      let tipos = document.createElement('p');
      tipos.innerHTML = item.type.name;
      pokemonDados.tipo.appendChild(tipos);
    });

    // Experiencia
    pokemonDados.experiencia.innerHTML = '<h3>Experiência</h3>';
    let experiencias = document.createElement('p');
    experiencias.innerHTML = dados.base_experience;
    pokemonDados.experiencia.appendChild(experiencias);

    // Altura
    pokemonDados.altura.innerHTML = '<h3>Altura</h3>';
    let alturas = document.createElement('p');
    alturas.innerHTML = dados.height;
    pokemonDados.altura.appendChild(alturas);
  })
	.catch((_) => {console.log(_)})
});