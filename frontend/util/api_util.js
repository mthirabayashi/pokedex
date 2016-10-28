export const fetchAllPokemon = (success) => {
  $.ajax ({
    method: 'GET',
    url: 'api/pokemon',
    success
  });
}

export const fetchSinglePokemon = (id, success) => {
  $.ajax ({
    method: 'GET',
    url: `api/pokemon/${id}`,
    success
  })
}

export const createPokemon = (pokemon,success) => {
  console.log(pokemon);
  $.ajax ({
    method: 'POST',
    data: pokemon,
    url: `api/pokemon`,
    success
  })
}
