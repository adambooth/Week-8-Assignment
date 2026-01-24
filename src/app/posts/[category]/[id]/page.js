// import db
import { db } from "@/utils/.dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "./id.css";

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

  const { rows: comments } = await db.query(
    `SELECT * FROM week7postscomments WHERE postId = $1`,
    [id],
  );

  console.log(comments);

  //create comment
  async function handleSubmit(formData) {
    "use server";

    const name = formData.get("creator");
    const comment = formData.get("comment");

    await db.query(
      `INSERT INTO week7postscomments (comment, postid, name)
     VALUES ($1, $2, $3)`,
      [comment, id, name],
    );

    revalidatePath(`/posts/category/${id}`);
    redirect(`/posts/category/${id}`);
  }

  async function redirectEditPage(commentId) {
    "use server";
    redirect(`/posts/category/${id}/edit/${commentId}`);
  }

  return (
    <>
      <div className="main-post-container">
        <div className="post-details-container">
          {" "}
          <div className="specific-post-content">
            <h1>Name : {post.creator}</h1>
            <h1 className="post-desc">Description : {post.description}</h1>
            <div className="specific-comments-container">
              <ul>
                {comments.map((comments) => (
                  <li className="comment" key={comments.generatedid}>
                    <strong>
                      {comments.name}: {comments.comment}
                    </strong>
                    <a
                      href={`/posts/category/${id}/edit/${comments.generatedid}`}
                      className="edit-btn"
                    >
                      Edit
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="specific-post-wrap">
            <div className="specific-add-comment-container">
              <form action={handleSubmit} className="form-content">
                <div className="specific-form-group">
                  <label htmlFor="creator">Name : {""}</label>
                  <input
                    id="creator"
                    type="text"
                    name="creator"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="specific-form-group">
                  <label htmlFor="comment">Description : {""}</label>
                  <textarea
                    id="comment"
                    type="text"
                    name="comment"
                    placeholder="Leave A Comment!"
                    required
                  />
                </div>

                <br />
                <button type="submit" className="specific-submit-button">
                  Submit
                </button>
                <a href={`/posts/category/${id}/edit/`} className="edit-btn">
                  Edit
                </a>
              </form>
            </div>
            <p className="like-count"> Likes : {post.likecount}</p>
            <div className="like-delete-container">
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
          </div>
        </div>
      </div>
    </>
  );
}
