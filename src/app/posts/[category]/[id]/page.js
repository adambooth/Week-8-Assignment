// import db
import { db } from "@/utils/.dbConnection";

export default async function posts({ params }) {
  const { id } = await params;

  const { rows } = await db.query(`SELECT * FROM week7posts WHERE id = $1`, [
    id,
  ]);

  const post = rows[0];

  console.log(post);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <>
      <h1>Id : {post.id}</h1>
      <h1>Name : {post.creator}</h1>
    </>
  );
}
