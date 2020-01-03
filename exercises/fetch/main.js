/* eslint-disable no-console */

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => {
    return response.json();
  })
  .then(dataJson => {
    console.log(dataJson);
  });
