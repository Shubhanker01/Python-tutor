import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import MainApp from './Components/MainApp'
import Module2 from './Components/Modules/Module2'
import Module3 from './Components/Modules/Module3'
import Module4 from './Components/Modules/Module4'
import Module5 from './Components/Modules/Module5'
import Module6 from './Components/Modules/Module6'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/main-app'>
          <Route index element={<MainApp ></MainApp>}></Route>
          <Route path='module2' element={<Module2 />}></Route>
          <Route path='module3' element={<Module3 />}></Route>
          <Route path='module4' element={<Module4 />}></Route>
          <Route path='module5' element={<Module5 />}></Route>
          <Route path='module6' element={<Module6 />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
