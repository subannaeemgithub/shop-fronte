import { useState } from 'react'
import { Routes, Route ,BrowserRouter } from 'react-router-dom'
import { Navebar } from './component/Navebar'
import { Home } from './page/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
   <Navebar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    
   </Routes>
   </BrowserRouter>
     
    </>
  )
}

export default App
