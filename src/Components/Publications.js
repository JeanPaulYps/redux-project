import { useParams } from "react-router"


function Publications (props) 
{
    
    const { key } = useParams();
    return(<p>Publicación {key} </p>)
}

export { Publications, }