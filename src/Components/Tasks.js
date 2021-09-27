import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTasks } from '../reducers/tasksSlice';
import { Spinner } from './Spinner';
import { ShowTask } from './ShowTask';

function Tasks() {
    const dispatch = useDispatch();
    const tasksByUserId = useSelector(state => state.tasks.tasksByUserId);
    const taskLoading = useSelector(state => state.tasks.loading);

    useEffect(()=> {
        dispatch( loadTasks() );
    }, [dispatch])

    return (
        <div>
            <h1> Tareas </h1>
            {taskLoading && <Spinner/>}
            {!taskLoading && Object.keys(tasksByUserId).map((item) => {
                    return(
                        <div>
                            <h1> {tasksByUserId[item].name }</h1>
                            <div>
                                {tasksByUserId[item].tasks.map( task => {
                                    return(<ShowTask task = {task} key={item} /> );
                                }
                                )} 
                            </div>
                            <hr/>
                        </div>
                    );
                }
                )
            }
        </div>
    )
}

export { Tasks, }