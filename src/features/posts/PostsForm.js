import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { postAdded } from "./PostsSlice";
import {nanoid} from "@reduxjs/toolkit";

const PostForm = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const addPost = () => {
        if (title && content) {
            dispatch(postAdded(title, content))
            setTitle('')
            setContent('')
        }
    }
    return (
        <div className="card">
            <h2>Post</h2>
            <label className="input">
            <input className="input__field"
                   type="text"
                   placeholder=" "
                   id="postTitle"
                   name="postTitle"
                   value={title}
                   onChange={onTitleChanged}/>
            <span className="input__label">Title</span>
            </label>
            <label className="input">
            <input className="input__field"
                   type="text"
                   placeholder=" "
                   id="postContent"
                   name="postContent"
                   value={content}
                   onChange={onContentChanged}/>
            <span className="input__label">Content</span>
            </label>
            <div className="button-group">
            <button onClick={addPost}>Add</button>
            </div>
      </div>
    )
}

export default PostForm