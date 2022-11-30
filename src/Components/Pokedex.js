import React from 'react';
import Pages from './Pages';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page - 1)
        }
    }
    const onRightClickHandler = () => {
        if(page + 1 !== totalPages) {
            setPage(page + 1)
        }
    }
    return (
        <div>
            <div className="pokedex_header">
                <h1>Pokemons</h1>
                <Pages
                    page={page + 1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </div>
            {loading ? (
                <div>Loading, hold the beast...</div>
            ) : (
                <div className="pokedex">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Pokedex;