import { usersActions } from './usersSlice'

const fetchUsersData = () => 
{
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (response.ok)
            {
                console.log("Datos cargados");
                response.json().then( data=> {
                    console.log(data);
                    dispatch(usersActions.actions.downloadedUsers(data));
                });
            }
            else
            {
                console.log('Respuesta de red OK pero respuesta HTTP no OK');
            }
        }).catch((error)=>{
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        })

    }
}

export { fetchUsersData, }