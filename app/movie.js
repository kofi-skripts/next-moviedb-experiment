import Image from 'next/image';
import Link from 'next/link';

export default function Movie({ title, release_date, poster_path, id }) {
  const image_path = 'https://image.tmdb.org/t/p/original';
  return (
    <div>
      <h2>{title}</h2>
      <h2>{release_date}</h2>
      <Link href={`/${id}`}>
        <Image
          width={250}
          height={200}
          src={`${image_path}/${poster_path}`}
          alt={title}
        />
      </Link>
    </div>
  );
}
