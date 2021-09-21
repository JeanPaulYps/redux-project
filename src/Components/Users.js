import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../reducers/usersSlice.js";
import { Spinner } from "./Spinner.js";
import { fetchUsersData } from "../reducers/usersActions.js";
import { UsersTable } from "./UsersTable.js";



function Users() {
    const usuarios = useSelector( state => state.users.usuarios);
    const cargando = useSelector( state => state.users.cargando);
    const dispatch = useDispatch();

     
    
    useEffect( () => 
    {
        setTimeout(()=>{
            dispatch(usersActions.actions.ready());
        }, 2000); 

        dispatch(fetchUsersData());
        
    }, [dispatch])
    
    


     
    return( 
        <div className="UserTable">
            { cargando && <Spinner/> } 

            { !cargando && <UsersTable usuarios = {usuarios} /> }
        </div>
        
    )
}


export { Users, };