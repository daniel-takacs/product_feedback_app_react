import React, {useContext} from 'react'
import { PostContext } from '../context/PostContext'

function PostList() {

    const [post] = useContext(PostContext)

    return (
        <div>
            {post.map(item => (
                <p>{item.upvotes}</p>
            ))}
        </div>
    )
}

export default PostList
