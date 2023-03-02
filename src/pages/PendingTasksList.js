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
                <p>{"=> " + task.title}</p>
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
