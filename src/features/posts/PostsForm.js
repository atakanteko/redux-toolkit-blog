import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { postAdded } from "./PostsSlice";
import {addNewPost} from "./PostsSlice";
const PostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const [addRequestStatus, setAddRequestStatus] = useState('idle')

    const users = useSelector(state => state.users)

    const canSave =
        [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

    const onSavePostClicked = async () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                await dispatch(addNewPost({ title, content, user: userId })).unwrap()
                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post: ', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }
    }

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)





    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

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
            <label htmlFor="postAuthor">Author: </label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {usersOptions}
            </select>
            <div className="button-group">
            <button onClick={onSavePostClicked} disabled={!canSave}>Add</button>
            </div>
      </div>
    )
}

export default PostForm