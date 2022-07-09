import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const PostsList = () => {
    const posts = useSelector(state => state.posts)
    
    const renderedPosts = posts.map((post, index) => {
        return(
            <div key={index} className='box'>
                <h2>{post.id}</h2>
                <span>{post.title}</span>
                <Link to={`/posts/${post.id}`} className="button muted-button">
                    View Post
                </Link>
            </div>
        )
    })

    return(
        <>
            {renderedPosts}
        </>
    )
}

export default PostsList