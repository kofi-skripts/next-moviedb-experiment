import Image from 'next/image';

export async function generateStaticParams() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_API_KEY}`
  );
  const data = await response.json();

  return data.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({ params }) {
  const image_path = 'https://image.tmdb.org/t/p/original';
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.NEXT_API_KEY}`
  );
  const data = await response.json();

  return (
    <div>
      <div>
        <h2 className="text-2xl">{data.title}</h2>
        <h2 className="text-lg">{data.release_date}</h2>
        <h2>Runtime: {data.runtime}</h2>
        <h2 className="bg-green-600 inline-block my-2 py-2 px-2 rounded-lg">
          {data.status}
        </h2>

        <Image
          width={1000}
          height={1000}
          className="my-12 w-full"
          src={`${image_path}/${data.backdrop_path}`}
          alt={data.title}
          priority
        />

        <p>{data.overview}</p>
      </div>
    </div>
  );
}
