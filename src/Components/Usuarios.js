import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../reducers/usersSlice.js";
import { Spinner } from "./Spinner.js";
import { fetchUsersData } from "../reducers/usersActions.js";

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



function Usuarios() {
    const usuariosRedux = useSelector( state => state.users.usuarios);
    const cargando = useSelector( state => state.users.cargando);
    const dispatch = useDispatch();

     
    
    useEffect( () => 
    {
        console.log(cargando);
        setTimeout(()=>{
            dispatch(usersActions.actions.ready());
        }, 2000); 

        dispatch(fetchUsersData());
        
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
            
            { cargando && <Spinner/> } 
            
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