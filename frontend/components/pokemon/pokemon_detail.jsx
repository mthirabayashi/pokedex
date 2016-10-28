import React from 'react';
import ItemDetail from './item_detail';

const PokemonDetail = (props) => {

  const handleClick = url => e => props.router.push(url);
  return (
    <ul>
      <img src={props.pokemonDetail.image_url} alt={props.pokemonDetail.name}/>
      <li>
        <h2>{props.pokemonDetail.name}</h2>
      </li>
      <li>Type: {props.pokemonDetail.poke_type}</li>
      <li>Attack: {props.pokemonDetail.attack}</li>
      <li>Defense: {props.pokemonDetail.defense}</li>
      <li>Moves: {props.pokemonDetail.moves.join(', ')}</li>
      <div>Items:
        <ul>
          {props.pokemonDetail.items.map( item => (
            <img src={item.image_url} alt={item.name} onClick={handleClick(`pokemon/${props.pokemonDetail.id}/item/${item.id}`)} key={item.id}/>
          ))}
        </ul>
          {props.children}
        </div>
    </ul>
  )
}

export default PokemonDetail;

              // <ItemDetail item={item}/>
