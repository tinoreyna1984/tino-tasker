/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter } from "react-router-dom";
import React, { useEffect } from 'react';
import { AppRouter, Footer, Navbar } from "./components"

function App() {

  // add doodle class globally
  useEffect(() => {
    document.body.classList.add('doodle');
  }, [])
  

  return (
    <div className="task-app-container">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
