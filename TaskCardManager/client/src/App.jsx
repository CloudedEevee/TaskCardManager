import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskPage from './components/views/TaskPage';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Routes>

            <Route element={<TaskPage/>} path="/" default />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App
