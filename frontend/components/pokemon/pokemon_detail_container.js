import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = ({pokemonDetail}, ownProps)=> {
  return ({
    pokemonDetail
  });
};

export default connect(
  mapStateToProps
)(PokemonDetail);
