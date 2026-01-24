import { db } from "@/utils/.dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import "./editPostPage.css";

export default async function editPostPage({ params }) {
  const { id: postId } = await params;
  const PostId = parseInt(postId, 10);

  const { rows } = await db.query(`SELECT * FROM week7posts WHERE id = $1`, [
    PostId,
  ]);

  const post = rows[0];

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div className="edit-post-container">
      <div className="form-wrapper">
        <h1>Edit Post</h1>

        <form
          action={async (formData) => {
            "use server";

            const updatedNamed = formData.get("name");
            const updatedDescription = formData.get("description");

            await db.query(
              `UPDATE week7posts 
               SET creator = $1, description = $2 
               WHERE id = $3`,
              [updatedNamed, updatedDescription, PostId],
            );

            revalidatePath(`/posts/category/${PostId}`);
            redirect(`/posts/category/${PostId}`);
          }}
        >
          <label>Name :</label>
          <input type="text" name="name" defaultValue={post.creator} required />

          <label>Description : </label>
          <textarea
            name="description"
            defaultValue={post.description}
            required
          />

          <button className="submit-button" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
