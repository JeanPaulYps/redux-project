import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserPublications, publicationsSlice } from '../reducers/publicationsSlice';
import { Spinner } from './Spinner';
import { Comments } from './Comments';


function Publications (props) 
{
    const dispatch = useDispatch();
    const { key } = useParams();
    const userPublications = useSelector(state => state.publications.userPublications);
    const loading = useSelector(state => state.publications.loading);
    const error = useSelector(state => state.publications.error);
    

    useEffect(()=>{
        console.log("Hola")
        dispatch(publicationsSlice.actions.intializeLoading()) ;
        setTimeout( ()=> dispatch(getUserPublications(key)), 1000) ;
        console.log("Chao")
    },[dispatch, key]);
    
    
    return(
        <>
        <h1> Publications </h1>
            <div>
            {loading && <Spinner/>}

            {
            !loading && userPublications.map( publication => {
                    return( 
                        <div>
                            <h2> {publication.title} </h2>
                            <p> {publication.body} </p>
                        </div>
                    )
                }

            )
            }

            { error && <p>{error} </p>}

            <Comments/>
            </div>
        </>
    )
}

export { Publications, }