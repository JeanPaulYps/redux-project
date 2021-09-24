import React from 'react'
import '../Styles/Comments.css'

const Comments = () => {
    const comments = [
        {
            'email': 'Eliseo@gardner.biz', 
            'comment': '  laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium '
        },
        {
            'email': 'Eliseo@gardner.biz', 
            'comment': '  laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium '
        },
        {
            'email': 'Eliseo@gardner.biz', 
            'comment': '  laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium '
        },
        {
            'email': 'Eliseo@gardner.biz', 
            'comment': '  laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium '
        },
        {
            'email': 'Eliseo@gardner.biz', 
            'comment': '  laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium '
        }
    ]
    return (
        <div className="Comments__Modal">
            <div className="Comments__Card">
                {
                    comments.map(comment => {
                        return(
                            <div className="Comment">
                                <p className="Comment__UserName"> { comment.email} </p>
                                <p ClassName="Comment__Comment"> 
                                    { comment.comment }
                                </p>
                                <hr/>
                            </div>
                        )
                    })
                }
            
            </div>
        </div>
    )
}

export { Comments, }
