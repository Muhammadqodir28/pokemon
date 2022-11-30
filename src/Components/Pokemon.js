import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;
    
    return (
        <div className="pokemon_card">
            <div className="pokemon_container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon_image" />
            </div>
            <div className="card_container">
                <div className="card">
                    <h3> {pokemon.name} </h3>
                    <div> #{pokemon.id} </div>
                </div>
                <div className="card_bottom">
                    <div className="pokemon">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div key={index} className="pokemon_type"> {type.type.name} </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;