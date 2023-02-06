import Movie from './movie';

export default async function Home() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_API_KEY}`
  );
  const data = await response.json();

  return (
    <main>
      <h1 className="text-lg mb-7">Popular Movies 🔥</h1>

      <div className="grid gap-16 grid-cols-fluid">
        {data.results.map((movie) => (
          <Movie {...movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
}
