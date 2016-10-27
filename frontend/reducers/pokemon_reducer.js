import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, action.pokemon)
    default:
      return state;
  }
}

export default PokemonReducer;
