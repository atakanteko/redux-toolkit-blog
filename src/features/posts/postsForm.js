
const PostForm = () => {
    return (
        <div class="card">
            <h2>Post</h2>
            <label class="input">
            <input class="input__field" type="text" placeholder=" " />
            <span class="input__label">Title</span>
            </label>
            <label class="input">
            <input class="input__field" type="text" placeholder=" " />
            <span class="input__label">Content</span>
            </label>
            <div class="button-group">
            <button>Add</button>
            </div>
      </div>
    )
}

export default PostForm