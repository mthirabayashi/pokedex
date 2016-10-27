import React from 'react';

const PokemonDetail = ({pokemonDetail}) => {
  return (
    <ul>
      <img src={pokemonDetail.image_url} alt={pokemonDetail.name}/>
      <li>
        <h2>{pokemonDetail.name}</h2>
      </li>
      <li>Type: {pokemonDetail.type}</li>
      <li>Attack: {pokemonDetail.attack}</li>
      <li>Defense: {pokemonDetail.defense}</li>
      <li>Moves: {pokemonDetail.moves.join(', ')}</li>
    </ul>
  )
}

export default PokemonDetail;
