import {connect} from 'react-redux';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = ({pokemonDetail})=> ({
  pokemonDetail
});

export default connect(
  mapStateToProps
)(PokemonDetail);
