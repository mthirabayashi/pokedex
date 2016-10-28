import {fetchAllPokemon, fetchSinglePokemon, createPokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_SINGLE_POKEMON, requestSinglePokemon, receiveSinglePokemon, CREATE_POKEMON, receiveNewPokemon} from '../actions/pokemon_actions';
import { hashHistory } from 'react-router';


const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveSinglePokemonSuccess = data => dispatch(receiveSinglePokemon(data));
  const receiveNewPokemonSuccess = pokemon => {
    dispatch(receiveNewPokemon(pokemon));
    hashHistory.push(`/pokemon/${pokemon.id}`);
  }

  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_SINGLE_POKEMON:
      fetchSinglePokemon(action.id, receiveSinglePokemonSuccess);
      return next(action);
    case CREATE_POKEMON:
      createPokemon(action.pokemon, receiveNewPokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default PokemonMiddleware;
