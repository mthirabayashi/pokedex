import { RECEIVE_ALL_POKEMON, RECEIVE_NEW_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, action.pokemon)
    case RECEIVE_NEW_POKEMON:
      const newPokemon = {[action.pokemon.id]: action.pokemon}
      const newState = merge({}, state, newPokemon);
      return newState;
    default:
      return state;
  }
}

export default PokemonReducer;
