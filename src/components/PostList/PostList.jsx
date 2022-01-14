import React, {useContext} from 'react'
import { CategoryContext } from '../../context/CategoryContext'
import { PostContext } from '../../context/PostContext'
import { SortContext } from '../../context/SortContext'
import Post from '../Post'
import './PostList.css'
import EmptyPage from '../EmptyPage/EmptyPage'

function PostList() {

    const [posts] = useContext(PostContext)
    const [sorted] = useContext(SortContext)
    const [category] = useContext(CategoryContext)

    let categorized
    let sortedList

    if (category === 'feature'){
        categorized = posts.filter(item => item.category === 'feature')
    }else if (category === 'ux'){
        categorized = posts.filter(item => item.category === 'ux')
    }else if (category === 'ui'){
        categorized = posts.filter(item => item.category === 'ui')
    }else if (category === 'enhancement'){
        categorized = posts.filter(item => item.category === 'enhancement')
    }else if (category === 'bug'){
        categorized = posts.filter(item => item.category === 'bug')
    }else if (category === 'all'){
        categorized = posts
    }


    if(sorted === "most-upvotes") {
        sortedList = categorized.slice().sort(function(a, b) {
            return b.upvotes - a.upvotes
        })
    }else if(sorted === "least-upvotes") {
        sortedList = categorized.slice().sort(function(a, b) {
            return a.upvotes - b.upvotes
        })
    }else if(sorted === "most-comments") {
        sortedList = categorized.slice().sort(function(a, b) {
            return b.comments - a.comments
        })
    }else if(sorted === "least-comments") {
        sortedList = categorized.slice().sort(function(a, b) {
            return a.comments - b.comments
        })
    }
    
    if(categorized.length === 0) {
        return <EmptyPage />
    }else {

        
    return (
        <div className='suggestion-list'>
            {sortedList.map(post => (
                <Post upvotes={post.upvotes} title={post.title} description={post.description} category={post.category} key={post.id}/>
            ))}
        </div>
    )
    }
}

export default PostList
