import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTasks } from '../reducers/tasksSlice';

function Tasks() {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch( loadTasks() );
    }, [dispatch])

    return (
        <div>
            <h1> Tareas </h1>
        </div>
    )
}

export { Tasks, }