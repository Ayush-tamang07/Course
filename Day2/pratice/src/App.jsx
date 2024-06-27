import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// import Form from './Components/Form/Form'

function App() {

  return (
    <>
    {/* <NavBar/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        {/* <Route path='/form' element={<Form/>} /> */}
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App;
