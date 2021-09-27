import React from 'react'

function ShowTask({task: {title, completed}, key}) {
    return (
        <div key={key}>
            <input type="checkbox" checked={completed} />
            <p> {title} </p>
        </div>
    )
}

export { ShowTask, }