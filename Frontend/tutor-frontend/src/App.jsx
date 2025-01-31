import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import MainApp from './Components/MainApp'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/main-app' element={<MainApp />}></Route>
      </Routes>
    </>
  )
}

export default App
