import { db } from "@/utils/.dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "./editCommentPage.css";

export default async function editCommentPage({ params }) {
  const { id: postId, generatedId: commentId } = await params;

  const CommentId = parseInt(commentId, 10);

  const { rows } = await db.query(
    `SELECT * FROM week7postscomments WHERE generatedid = $1`,
    [CommentId],
  );

  const comment = rows[0];

  if (!comment) {
    return <h1>Comment not found</h1>;
  }

  return (
    <div className="edit-comment-container">
      <div className="form-wrapper">
        <h1>Edit Comment</h1>
        <form
          action={async (formData) => {
            "use server";
            const updatedName = formData.get("name");
            const updatedComment = formData.get("comment");

            await db.query(
              `UPDATE week7postscomments SET name = $1, comment = $2 WHERE generatedid = $3`,
              [updatedName, updatedComment, CommentId],
            );

            revalidatePath(`/posts/category/${postId}`);
            redirect(`/posts/category/${postId}`);
          }}
        >
          <label>Name:</label>
          <input type="text" name="name" defaultValue={comment.name} required />
          <label>Comment:</label>
          <textarea name="comment" defaultValue={comment.comment} required />

          <button className="submit-button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
