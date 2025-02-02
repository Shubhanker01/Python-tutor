import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import MainApp from './Components/MainApp'
import Module2 from './Components/Modules/Module2'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/main-app'>
          <Route index element={<MainApp />}></Route>
          <Route path='module2' element={<Module2 />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
