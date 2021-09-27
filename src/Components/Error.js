import React from 'react'

function Error({ message }) {
    return (
        <div>
            <h2>Error</h2>
            <p> { message } </p>
        </div>
    )
}

export { Error, }