import React from 'react'
import "../scss/components/_index.scss"

export function PendingTasksList({ tasks }) {
  let pending = tasks.filter(task => task.completed === false);
  return (
    <>
      <div className='task-container doodle border'>
        {
          pending.length > 0 ?
            (pending.map(task => (
              <div key={task.id} className='task'>
                <h3>{task.title}</h3>
                <p>{task.comments}</p>
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
