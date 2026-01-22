import Link from "next/link";

export default function FilterContainer() {
  return (
    <div className="filter-container">
      <h2 className="filters-title">Filters</h2>
      <Link href={`/`}>
        <p>All Categories</p>
      </Link>
      <Link href={`/posts/Art`}>
        <p>Art</p>
      </Link>
      <Link href={`/posts/Music`}>
        <p>Music</p>
      </Link>
      <Link href={`/posts/Books`}>
        <p>Books</p>
      </Link>
      <Link href={`/posts/Food`}>
        <p>Food</p>
      </Link>
      <Link href={`/posts/Travel`}>
        <p>Travel</p>
      </Link>
      <Link href={`/posts/Photography`}>
        <p>Photography</p>
      </Link>
      <Link href={`/posts/Fitness`}>
        <p>Fitness</p>
      </Link>
      <Link href={`/posts/Pets`}>
        <p>Pets</p>
      </Link>
      <Link href={`/posts/Adventure`}>
        <p>Adventure</p>
      </Link>
      <Link href={`/posts/Tech`}>
        <p>Technology</p>
      </Link>
      <Link href={`/posts/Games`}>
        <p>Games</p>
      </Link>
      <Link href={`/posts/Hobbies`}>
        <p>Hobbies</p>
      </Link>
      <Link href={`/posts/Education`}>
        <p>Education</p>
      </Link>
      <Link href={`/posts/Wellness`}>
        <p>Wellness</p>
      </Link>
      <Link href={`/posts/Entertainment`}>
        <p>Entertainment</p>
      </Link>
    </div>
  );
}
