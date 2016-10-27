import {fetchAllPokemon, fetchSinglePokemon} from '../util/api_util';
import {REQUEST_ALL_POKEMON, receiveAllPokemon, REQUEST_SINGLE_POKEMON, requestSinglePokemon, receiveSinglePokemon} from '../actions/pokemon_actions';

const PokemonMiddleware = ({ dispatch }) => next => action => {
  const receiveAllPokemonSuccess = data => dispatch(receiveAllPokemon(data));
  const receiveSinglePokemonSuccess = data => dispatch(receiveSinglePokemon(data));
  switch(action.type) {
    case REQUEST_ALL_POKEMON:
      fetchAllPokemon(receiveAllPokemonSuccess);
      return next(action);
    case REQUEST_SINGLE_POKEMON:
      fetchSinglePokemon(action.id, receiveSinglePokemonSuccess);
      return next(action);
    default:
      return next(action);
  }
}

export default PokemonMiddleware;
