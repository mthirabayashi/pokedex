import React from 'react';
import { Provider } from 'react-redux';
import  PokemonIndexContainer from './pokemon/pokemon_index_container';
import { Router, Route, hashHistory } from 'react-router';
import {requestAllPokemon, requestSinglePokemon} from '../actions/pokemon_actions';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => {

  const requestAllPokemonOnEnter = () => {
    store.dispatch(requestAllPokemon());
  };
  const requestSinglePokemonOnEnter = (props) => {
    store.dispatch(requestSinglePokemon(props.params.pokemonId))
  }

  return (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={PokemonIndexContainer} onEnter={requestAllPokemonOnEnter}>
        <Route path="pokemon/:pokemonId" component={PokemonDetailContainer} onEnter={requestSinglePokemonOnEnter}/>
          <Route path="item/:itemId" component={ItemDetailContainer} />
    </Route>
    </Router>
  </Provider>
  );
};



export default Root;
