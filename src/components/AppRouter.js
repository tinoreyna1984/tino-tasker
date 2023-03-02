/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import { About, AllTasksList, CompletedTasksList, PendingTasksList } from '../pages'
import { initTasks } from '../redux/tasksSlice';

export function AppRouter() {

  const dispatch = useDispatch();
  const { taskList } = useSelector(state => state.tasks)

  useEffect(() => {
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    dispatch(initTasks({ tasks }))
  }, [])

  return (
    <Routes>
      <Route index element={<AllTasksList tasks={taskList} />} />
      <Route path='/completed' element={<CompletedTasksList tasks={taskList} />} />
      <Route path='/pending' element={<PendingTasksList tasks={taskList} />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}
