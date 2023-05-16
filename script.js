

const pokemonInput = document.getElementById('pokemonInput');
const searchButton = document.getElementById('searchButton');
const pokemonInfo = document.getElementById('pokemonInfo');


function getPokemonInfo(pokemonName) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then(pokemon => {
      
      const pokemonHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>ID: ${pokemon.id}</p>
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
        <p>Tipos: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        <p>Habilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
        

      `;
     
      pokemonInfo.innerHTML = pokemonHTML;
    })
    .catch(error => {
      console.error('Error al obtener la información del Pokemon', error);
   
      pokemonInfo.innerHTML = 'Error al obtener la información del Pokemon';
    });
}


searchButton.addEventListener('click', function() {
  const pokemonName = pokemonInput.value.toLowerCase();
  getPokemonInfo(pokemonName);
});


pokemonInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const pokemonName = pokemonInput.value.toLowerCase();
    getPokemonInfo(pokemonName);
  }
});


