import React from 'react'
import { useState } from 'react'
const App = () => {
  const [todos,setTodos] = useState([]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700">
      <div className="bg-gray-800 p-6 rounded-xl w-175 shadow-lg ">
        <h1 className="text-3xl font-bold mb-6 text-amber-100 text-center">My Todos</h1>
      </div>
    </div>
  )
}

export default App