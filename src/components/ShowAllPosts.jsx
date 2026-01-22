import { db } from "@/utils/.dbConnection";
import Link from "next/link";

export default async function ShowAllPosts({ searchParams }) {
  const params = await searchParams;
  const sortOrder = params?.sort === "asc" ? "ASC" : "DESC";

  const { rows } = await db.query(
    `SELECT * FROM week7posts ORDER BY id ${sortOrder}`,
  );

  return (
    <div className="posts-container">
      <a href="/?sort=asc" className="button">
        Sort Ascending
      </a>
      <a href="/?sort=desc" className="button">
        Sort Descending
      </a>

      <h1 className="mt-20">Posts Page</h1>

      {rows.map((post) => (
        <div key={post.id} className="post-template">
          <Link href={`/posts/category/${post.id}`}>
            <p className="post-creator post-content">Creator: {post.creator}</p>
            <p className="post-description post-content">
              Description: {post.description}
            </p>
            <p className="post-category post-content">
              Category: {post.category}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
