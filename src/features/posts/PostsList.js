import React from 'react'
import { useSelector } from 'react-redux'

const PostsList = () => {
    const posts = useSelector(state => state.posts)
    
    const renderedPosts = posts.map(post => {
        return(
            <div className='box'>
                <h2>{post.id}</h2>
                <span>{post.title}</span>
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