'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setPokemonList(data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemon();
  }, []);

  if (loading) return <p className="text-center text-lg text-accent">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Failed to load Pokémon data.</p>;

  return (
    <div>
      <h1 className="text-3xl text-accent font-bold text-center mb-4">Pokémon Explorer</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemonList.map((pokemon, index) => (
          <li
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow-lg text-center transform transition hover:scale-105 hover:shadow-accent"
          >
            <Link href={`/pokemon/${index + 1}`} className="text-accent font-bold text-xl">
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
