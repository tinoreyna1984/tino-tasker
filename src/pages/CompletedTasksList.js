import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ConfirmationModal } from '../components';
import { deleteTask } from '../redux/tasksSlice';
import "../scss/components/_index.scss"

export function CompletedTasksList({ tasks }) {

  const [isOpen, setIsOpen] = useState(false);

  let completed = tasks.filter(task => task.completed === true);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask({ id }))
  }

  const handleDeleteAll = () => {
    if(completed.length < 1) return;
    setIsOpen(true)
  }

  return (
    <>
      <button type='button' onClick={handleDeleteAll} style={{ marginBottom: "2rem" }}>Delete all</button>
      {isOpen && <ConfirmationModal setIsOpen={setIsOpen} />}
      <div className='task-container doodle border'>
        {
          completed.length > 0 ?
            (completed.map(task => (
              <div key={task.id} className='task'>
                <h3>{task.title}</h3>
                <p>{task.comments}</p>
                <button type='button' onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            ))) :
            (<div className='task'>
              <p>No tasks found</p>
            </div>)
        }
      </div>
    </>
  )
}
