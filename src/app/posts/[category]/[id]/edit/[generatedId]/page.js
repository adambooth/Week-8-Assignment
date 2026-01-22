import { db } from "@/utils/.dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function editCommentPage({ params }) {
  const { id: postId, generatedId: commentId } = await params;

  console.log("params:", params);

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
    <div>
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
        <div>
          <label>Name:</label>
          <input type="text" name="name" defaultValue={comment.name} required />
        </div>

        <div>
          <label>Comment:</label>
          <textarea name="comment" defaultValue={comment.comment} required />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
