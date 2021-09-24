import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Comments.css';
import { getComments } from '../reducers/commentsSlice';

const Comments = ({ setCommentsVisibility, publicationId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComments(publicationId));
    }, [dispatch, publicationId])

    const publicationComments = useSelector(state => state.comments.publicationComments);

    return (
        <div className="Comments__Modal">
            <div className="Comments__Card">
                <img className="Comments__CloseButton" src="/closeButton.svg" alt="" onClick={() => setCommentsVisibility(false) }/>
                <div className="Comments__Container">
                {console.log(`${publicationId}`)}
                {
                    publicationComments.map(comment => {
                        return(
                            <div className="Comment">
                                <p className="Comment__UserName"> { comment.email} </p>
                                <p ClassName="Comment__Comment"> 
                                    { comment.body }
                                </p>
                                <hr/>
                            </div>
                        )
                    })
                }
                </div>
            
            </div>
        </div>
    )
}

export { Comments, }
