import Link from "next/link";

export default function FilterContainer() {
  return (
    <div className="filter-container">
      <h2 className="filters-title">Filters</h2>
      <Link href={`/`}>
        <p className="filter-tag">All Categories</p>
      </Link>
      <Link href={`/posts/Art`}>
        <p className="filter-tag">Art</p>
      </Link>
      <Link href={`/posts/Music`}>
        <p className="filter-tag">Music</p>
      </Link>
      <Link href={`/posts/Books`}>
        <p className="filter-tag">Books</p>
      </Link>
      <Link href={`/posts/Food`}>
        <p className="filter-tag">Food</p>
      </Link>
      <Link href={`/posts/Travel`}>
        <p className="filter-tag">Travel</p>
      </Link>
      <Link href={`/posts/Photography`}>
        <p className="filter-tag">Photography</p>
      </Link>
      <Link href={`/posts/Fitness`}>
        <p className="filter-tag">Fitness</p>
      </Link>
      <Link href={`/posts/Pets`}>
        <p className="filter-tag">Pets</p>
      </Link>
      <Link href={`/posts/Adventure`}>
        <p className="filter-tag">Adventure</p>
      </Link>
      <Link href={`/posts/Tech`}>
        <p className="filter-tag">Technology</p>
      </Link>
      <Link href={`/posts/Games`}>
        <p className="filter-tag">Games</p>
      </Link>
      <Link href={`/posts/Hobbies`}>
        <p className="filter-tag">Hobbies</p>
      </Link>
      <Link href={`/posts/Education`}>
        <p className="filter-tag">Education</p>
      </Link>
      <Link href={`/posts/Wellness`}>
        <p className="filter-tag">Wellness</p>
      </Link>
      <Link href={`/posts/Entertainment`}>
        <p className="filter-tag">Entertainment</p>
      </Link>
    </div>
  );
}
