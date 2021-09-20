

function darUsuarios ()
{
    return (dispatch) => {
        dispatch({
            type: 'traer_usuarios',
            payload: []
            }
        );
    }   
}

export { darUsuarios, }