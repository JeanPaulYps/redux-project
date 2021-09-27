import { usersActions } from './usersSlice'

const fetchUsersData = () => 
{
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok)
            {
                throw new Error('We have problems loading the data. Please try later')
            }
            console.log("Datos cargados");
            response.json().then( data=> {
                console.log(data);
                dispatch(usersActions.actions.downloadedUsers(data));
            });
        }).catch((error)=>{
            console.log(error.message);
            dispatch(usersActions.actions.loadingError('We have problems loading the data. Please try later'));
        })

    }
}

export { fetchUsersData, }