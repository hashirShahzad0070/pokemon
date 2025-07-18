/* eslint-disable */

import React from "react";

interface PokemonInfoCardProps {
  name: string;
  image: string;
  types: string[];
}

const PokemonInfoCard: React.FC<PokemonInfoCardProps> = ({ name, image, types }) => {
  return (
    <>
      <h2 className="text-3xl font-semibold text-black text-center mb-6 capitalize">{name}</h2>
      <img
        src={image}
        alt={name}
        className="mx-auto mb-4 w-48 h-48 object-contain rounded-lg shadow-xl"
      />
      <div className="flex justify-center space-x-3 mb-6">
        {types.length > 0 ? (
          types.map((type, index) => (
            <span key={index} className="bg-indigo-200 text-indigo-700 text-sm px-4 py-2 rounded-full">
              {type}
            </span>
          ))
        ) : (
          <span className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full">No types available</span>
        )}
      </div>
    </>
  );
};

export default PokemonInfoCard;
