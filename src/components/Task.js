import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, setTaskAsComplete } from '../redux/tasksSlice';
import { ModalForm } from './ModalForm';

export function Task({ task }) {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const handleEdit = (id) => {
        setIsOpen(!isOpen)
    }

    const handleDelete = (id) => {
        dispatch(deleteTask({ id }))
    }

    const handleComplete = (e, id) => {
        let checkedStatus = e.target.checked;
        dispatch(setTaskAsComplete({ id, checkedStatus }))
    }

    return (
        <>
            {isOpen && <ModalForm setIsOpen={setIsOpen} task={task} />}
            <div className='task'>
                <label htmlFor={task.id}>
                    <input className='doodle' id={task.id} checked={task.completed ? true : false}
                        name="complete" type="checkbox" onChange={(e) => handleComplete(e, task.id)} />
                    <h4>{task.title}</h4>
                </label>
                <p>{task.comments}</p>
                <div className='task-actions'>
                    <button type='button' onClick={() => handleEdit(task.id)}>Edit</button>
                    <button type='button' onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            </div>
        </>
    )
}
