import Header from "@/components/Header";

export default function App() {
  return (
    <>
      <Header />
      <h2 className="posts-subtitle">Posts</h2>
      <div className="posts-container">
        <div className="post-template">
          <p className="post-creator post-content">Creator: Alice</p>
          <p className="post-description post-content">
            Description: This is the first dummy post.
          </p>
          <p className="post-category post-content">Category: General</p>
          <div className="like-delete-container">
            <p className="likecount"> Likes : 10</p>
            <button className="like-delete-btn">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/pastel-glyph/64/facebook-like--v1.png"
                alt="facebook-like--v1"
              />
            </button>
            <button className="like-delete-btn">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/carbon-copy/50/filled-trash.png"
                alt="filled-trash"
              />
            </button>
          </div>
        </div>

        <div className="post-template">
          <p className="post-creator post-content">Creator: Bob</p>
          <p className="post-description post-content">
            Description: This is the second dummy post.
          </p>
          <p className="post-category post-content">Category: News</p>
          <div className="like-delete-container">
            <p className="likecount"> Likes : 5</p>
            <button className="like-delete-btn">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/pastel-glyph/64/facebook-like--v1.png"
                alt="facebook-like--v1"
              />
            </button>
            <button className="like-delete-btn">
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
    </>
  );
}
