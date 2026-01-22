import Link from "next/link";

// import db
import { db } from "@/utils/.dbConnection";
import FilterContainer from "@/components/FilterContainer";

export default async function posts({ params }) {
  const { category } = await params;

  const { rows } = await db.query(
    `SELECT * FROM week7posts WHERE category = $1`,
    [category],
  );

  console.log(rows);

  if (!rows) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <FilterContainer />
      <div className="posts-container ">
        <h1 className="mt-20">Posts Page</h1>
        {rows.map((posts) => {
          return (
            <div key={posts.id} className="post-template">
              <Link href={`/posts/category/${posts.id}`}>
                <p className="post-creator post-content">
                  Creator: {posts.creator}
                </p>
                <p className="post-description post-content">
                  Description: {posts.description}
                </p>
                <p className="post-category post-content">
                  Category: {posts.category}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
