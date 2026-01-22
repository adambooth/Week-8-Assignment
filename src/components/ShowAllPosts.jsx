//import db
import { db } from "@/utils/.dbConnection";

import Link from "next/link";

export default async function ShowAllPosts() {
  const { rows } = await db.query(`SELECT * FROM week7posts ORDER BY id DESC`);
  console.log(rows);

  return (
    <>
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
