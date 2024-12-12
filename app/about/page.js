import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl text-accent font-bold mb-4">About Pokémon Explorer</h1>
      <p className="text-lg text-secondary max-w-xl mx-auto mb-4">
        This app helps you explore Pokémon data using the PokéAPI!
      </p>
      <Link href="/" className="text-accent font-bold hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}
