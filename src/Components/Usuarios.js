import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darUsuarios } from '../actions/usuariosActions.js'

const usuarios = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
    }
]



function Usuarios(props) {
    const usuariosRedux = useSelector( state => state.usuarios);
    const cargando = useSelector(state => state.cargando)
    const dispatch = useDispatch();

     
    
    useEffect( () => 
    {
        setTimeout(()=>{
            dispatch({type: "listo"});
        }, 2000); 
        
    }, [])
    
    


     
    return( 
        <table>
            <thead>
                <th> Nombre </th>
                <th> Usuario </th>
                <th> Email </th>
            </thead>
            { 
            usuarios.map( (usuario) => 
                {
                    return(
                        <tr>
                            <td> {usuario.name} </td>
                            <td> {usuario.username} </td>
                            <td> {usuario.email} </td>
                        </tr>
                    )
                }
            )
            }
            
            { cargando && <p>Cargando</p> } 
            
            { 
            !cargando && usuariosRedux.map( (usuario) => 
                {
                    return(
                        <tr>
                            <td> {usuario.name} </td>
                            <td> {usuario.username} </td>
                            <td> {usuario.email} </td>
                        </tr>
                    )
                }
            )
            } 
            
        </table>
        
    )
}


export { Usuarios };