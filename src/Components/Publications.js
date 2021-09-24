import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserPublications, publicationsSlice } from '../reducers/publicationsSlice';
import { Spinner } from './Spinner';
import { Comments } from './Comments';
import { useState } from "react";


function Publications (props) 
{
    const dispatch = useDispatch();
    const { userId } = useParams();
    const userPublications = useSelector(state => state.publications.userPublications);
    const loading = useSelector(state => state.publications.loading);
    const error = useSelector(state => state.publications.error);

    const [commentsAreVisible, setCommentsVisibility] = useState(false);
    const [publicationId, setPublicationId] = useState(0);
    

    useEffect(()=>{
        dispatch(publicationsSlice.actions.intializeLoading()) ;
        setTimeout( ()=> dispatch(getUserPublications(userId)), 1000) ;
    },[dispatch, userId]);

    const openComments = divPublicationId => () => {
        setPublicationId(divPublicationId);
        setCommentsVisibility(true)
    }
    
    
    return(
        <>
        <h1> Publications </h1>
            <div>
            {loading && <Spinner/>}

            {
            !loading && userPublications.map( publication => {
                    return( 
                        <div key= {publication.id} onClick={openComments(publication.id)}>
                            <h2> {publication.title} </h2>
                            <p> {publication.body} </p>
                            <hr/>
                        </div>
                    )
                }

            )
            }

            { error && <p>{error} </p>}

            {commentsAreVisible && 
                <Comments setCommentsVisibility={setCommentsVisibility} 
                            publicationId = {publicationId} />
            }
            </div>
        </>
    )
}

export { Publications, }