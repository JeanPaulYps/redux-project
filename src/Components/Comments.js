import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Comments.css';
import { getComments } from '../reducers/commentsSlice';
import { Spinner } from './Spinner';
import { Error } from './Error';


const Comments = ({ setCommentsVisibility, publicationId }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComments(publicationId));
    }, [dispatch, publicationId])

    const publicationComments = useSelector(state => state.comments.publicationComments);
    const loadingComments = useSelector(state => state.comments.loading);
    const errorCommentsLoading = useSelector(state => state.comments.error);

    return (
        <div className="Comments__Modal">
            <div className="Comments__Card">
                <img className="Comments__CloseButton" src={`${process.env.PUBLIC_URL}/closeButton.svg`} alt="" onClick={() => setCommentsVisibility(false) }/>
                <div className="Comments__Container">
                { loadingComments && <Spinner/>}                
                { !loadingComments && 
                    publicationComments.map(comment => {
                        return(
                            <div className="Comment">
                                <p className="Comment__UserName"> { comment.email} </p>
                                <p className="Comment__Comment"> 
                                    { comment.body }
                                </p>
                                <hr/>
                            </div>
                        )
                    })
                }
                { errorCommentsLoading && <Error message={ errorCommentsLoading }/> }
                </div>
            
            </div>
        </div>
    )
}

export { Comments, }
