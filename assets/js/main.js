// Input Nome do pokemon e botão
const pokemon = document.getElementById("input-text");
const btn = document.querySelector(".nav__input-btn");

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
    img.setAttribute('src', dados.sprites.front_default);
    pokemonDados.img.innerHTML = '';
    pokemonDados.img.appendChild(img);

    // Nome
    let nome = document.createElement('h1');
    nome.innerHTML = "Nome " + dados.species.name;
    pokemonDados.nome.innerHTML = '';
    pokemonDados.nome.appendChild(nome);


    // For para o selecionamento de Atributos dos arrays

    // Habilidades      
    pokemonDados.habilidades.innerHTML = '';
    for(let i = 0; i < dados.abilities.length; i++){
      let habilidades = document.createElement('p');
      habilidades.innerHTML = "Habilidades " + dados.abilities[i].ability.name;
      pokemonDados.habilidades.appendChild(habilidades);
    }
    
    // Formas
    pokemonDados.formas.innerHTML = '';
    for(let i = 0; i < dados.forms.length; i++){
      let formas = document.createElement('p');
      formas.innerHTML = "formas " + dados.forms[i].name;
      pokemonDados.formas.appendChild(formas);
    }

    // Especies
    pokemonDados.especie.innerHTML = '';
    let especies = document.createElement('p');
    especies.innerHTML =  "especies " + dados.species.name;
    pokemonDados.especie.appendChild(especies);

    // Tipos
    pokemonDados.tipo.innerHTML = '';
    for(let i = 0; i < dados.types.length; i++){
      let tipos = document.createElement('p');
      tipos.innerHTML = "tipos " + dados.types[i].type.name;
      pokemonDados.tipo.appendChild(tipos);
    }

    // Experiencia
    pokemonDados.experiencia.innerHTML = '';
    let experiencias = document.createElement('p');
    experiencias.innerHTML = "experiencia " + dados.base_experience;
    pokemonDados.experiencia.appendChild(experiencias);

    // Altura
    pokemonDados.altura.innerHTML = '';
    let alturas = document.createElement('p');
    alturas.innerHTML = "altura" + dados.height;
    pokemonDados.altura.appendChild(alturas);
  })
	.catch((_) => {console.log(_)})
});
