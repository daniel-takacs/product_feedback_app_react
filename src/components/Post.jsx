import React from 'react'
import CommentImg from '../assets/shared/icon-comments.svg'

function Post({ key, upvotes, title, description, category }) {
    return (
        <div>
            <div key={key} className='suggestion_box_container'>
                <div className='feedback_left'>
                    <div >
                        {upvotes}
                    </div>
                </div>
                <div className='feedback_center'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{category}</p>
                </div>
                <div className="feedback_right">
                    <img src={CommentImg} alt="comment icon" />
                    <p>commentsCount</p>
                </div>
            </div>
        </div>
    )
}

export default Post
