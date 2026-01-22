// import db
import { db } from "@/utils/.dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function posts({ params }) {
  const { id, category } = await params;

  const { rows } = await db.query(`SELECT * FROM week7posts WHERE id = $1`, [
    id,
  ]);

  const post = rows[0];

  console.log(post);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const handleLike = async () => {
    "use server";
    await db.query(
      `UPDATE week7posts SET likecount = likecount + 1 WHERE id = $1 RETURNING *`,
      [post.id],
    );

    revalidatePath("/");

    redirect(`/posts/category/${post.id}`);
  };

  const handleDelete = async () => {
    "use server";
    await db.query(`DELETE FROM week7posts WHERE id = $1`, [post.id]);
    revalidatePath("/");

    redirect("/");
  };

  return (
    <>
      <h1>Id : {post.id}</h1>
      <h1>Name : {post.creator}</h1>
      <div className="like-delete-container">
        <p className="likecount"> Likes : {post.likecount}</p>
        <button className="like-delete-btn" onClick={handleLike}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/pastel-glyph/64/facebook-like--v1.png"
            alt="facebook-like--v1"
          />
        </button>
        <button className="like-delete-btn" onClick={handleDelete}>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/carbon-copy/50/filled-trash.png"
            alt="filled-trash"
          />
        </button>
      </div>
    </>
  );
}
