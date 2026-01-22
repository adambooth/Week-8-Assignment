import "../Create/create.css";

export default function CreatePostPage() {
  return (
    <>
      <div className="main-form-container">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>Create A Post</h2>
          </div>

          <form className="form-content">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="creator"
                type="text"
                name="creator"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                placeholder="Description"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select id="category" name="category" required>
                <option value="">All Categories</option>
                <option value="Art">Art</option>
                <option value="Music">Music</option>
                <option value="Books">Books</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
                <option value="Photography">Photography</option>
                <option value="Fitness">Fitness</option>
                <option value="Pets">Pets</option>
                <option value="Adventure">Adventure</option>
                <option value="Tech">Technology</option>
                <option value="Games">Games</option>
                <option value="Hobbies">Hobbies</option>
                <option value="Education">Education</option>
                <option value="Wellness">Wellness</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>
            <br />
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
