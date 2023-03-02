/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ModalForm, Task } from '../components';
import "../scss/components/_index.scss"

export function AllTasksList({ tasks }) {

  const [isOpen, setIsOpen] = useState(false);

  const handleAddTask = () => {
    setIsOpen(true)
  }

  return (
    <>
      <div className='task-container doodle border'>
        {tasks.length < 1 ? (
          <div className='task'>
            <p>No tasks added</p>
          </div>) : (
          tasks?.map(task =>
            <Task key={task.id} task={task} />
            )
        )
        }
      </div>
      <button className='float-button' onClick={handleAddTask}>Add task</button>
      {isOpen && <ModalForm setIsOpen={setIsOpen} />}
    </>
  )
}
