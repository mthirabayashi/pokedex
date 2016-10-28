import { RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const PokemonDetailReducer = (state={ moves: [], items: []}, action) => {
  switch(action.type) {
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon
    default:
      return state;
  }
}

export default PokemonDetailReducer;
