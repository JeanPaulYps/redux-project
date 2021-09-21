import { Link } from 'react-router-dom';


function UsersTable({ usuarios }){
    return( 
        <table>
            <thead>
                <th> Nombre </th>
                <th> Email </th>
                <th> Website </th>
            </thead>
            {
            usuarios.map( (usuario) => 
                {
                    return(
                        <tr>
                            <td> {usuario.name} </td>
                            <td> {usuario.email} </td>  
                            <td> {usuario.website} </td>
                            <td>
                                <Link to= {`/userPublications/${usuario.id}`}>
                                    <img src={process.env.PUBLIC_URL + '/blog.svg'} alt="" width="20px"  />
                                </Link>
                            </td>
                        </tr>
                    )
                }
            )
            }
        </table>
    );
}

export { UsersTable, };