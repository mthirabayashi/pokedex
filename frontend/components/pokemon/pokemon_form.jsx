import React from 'react';

const TYPES = [
  "fire",
  "electric",
  "normal",
  "ghost",
  "psychic",
  "water",
  "bug",
  "dragon",
  "grass",
  "fighting",
  "ice",
  "flying",
  "poison",
  "ground",
  "rock",
  "steel"
]

class PokemonForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image_url: '',
      poke_type: 'fire',
      attack: 0,
      defense: 0,
      moves: {}
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(property) {
    if (property === 'moves') {
      return e => this.setState({
        ['moves']: Object.assign({}, this.state.moves, {[e.target.id]: e.target.value})
      });
    }
    return e => this.setState({[property]: e.target.value});
  }


  handleSubmit(e) {
    e.preventDefault();
    const pokemonInfo = Object.assign({},this.state);
    this.props.createPokemon({pokemon: pokemonInfo});
    // this.setState({
    //   name: '',
    //   image_url: '',
    //   poke_type: '',
    //   attack: 0,
    //   defense: 0,
    //   moves: []
    // })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:
          <input type='text' name='pokemon[name]' onChange={this.update('name')}></input>
          </label>
        <label>Image_URL:
          <input type='text' name='pokemon[image_url]' onChange={this.update('image_url')}></input>
        </label>
        <label>
          <select name='pokemon[poke_type]' onChange={this.update('poke_type')}>Type
            {TYPES.map( type => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </label>
        <label>Attack:
          <input type='number' name='pokemon[attack]' onChange={this.update('attack')}></input>
        </label>
        <label>Defense:
        <input type='number' name='pokemon[defense]' onChange={this.update('defense')}></input>
        </label>

        <label>Move1
          <input type='text' name='pokemon[moves]' id="move_1" onChange={this.update('moves')}></input>
        </label>
        <label>Move2
          <input type='text' name='pokemon[moves]' id="move_2" onChange={this.update('moves')}></input>
        </label>

        <input type='submit'></input>
      </form>
    )
  }
}


export default PokemonForm;
