import React from 'react';

const Navbar = () => {
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div className="logo">
                <img
                    alt="pokeapi-logo"
                    src={logo}
                    className="img"
                />
            </div>
        </nav>
    );
}

export default Navbar;