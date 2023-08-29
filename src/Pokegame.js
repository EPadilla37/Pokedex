import React from 'react';
import Pokedex from './Pokedex';

function Pokegame(props) {
  const { pokemons } = props;

  // Divide the list of pokemons into two hands
  const hand1 = pokemons.slice(0, 4);
  const hand2 = pokemons.slice(4, 8);

  // Calculate total experience for each hand
  const totalExperience1 = hand1.reduce((total, pokemon) => total + pokemon.base_experience, 0);
  const totalExperience2 = hand2.reduce((total, pokemon) => total + pokemon.base_experience, 0);

  // Determine the winning hand
  const isWinner1 = totalExperience1 > totalExperience2;
  const isWinner2 = totalExperience2 > totalExperience1;

  return (
    <div className="Pokegame">
      <Pokedex pokemons={hand1} totalExperience={totalExperience1} isWinner={isWinner1} />
      <Pokedex pokemons={hand2} totalExperience={totalExperience2} isWinner={isWinner2} />
    </div>
  );
}

export default Pokegame;
