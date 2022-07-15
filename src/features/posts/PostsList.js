import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {PostAuthor} from "./PostAuthor";
import {TimeAgo} from "./TimeAgo";
import {ReactionButtons} from "./ReactionButtons";
import {selectAllPosts, fetchPosts} from "./PostsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const dispatch = useDispatch()

    const postStatus = useSelector(state => state.posts.status)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    const renderedPosts = posts.map((post, index) => {
        console.log(post)
        return(
            <div key={index} className='box'>
                <h2>{post.id}</h2>
                <span>{post.title}</span>
                <PostAuthor userId={post.user}/>
                <Link to={`/posts/${post.id}`} className="button muted-button">
                    View Post
                </Link>

            </div>
        )
    })

    if (postStatus === 'loading') {
        return (
            <div>
                Loading...
            </div>
        )
    } else if (postStatus === 'failed') {
        return (
            <div>
                Failed
            </div>
        )
    } else {
        return(
            <>
                {renderedPosts}
            </>
        )
    }



}

export default PostsList