import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
// import Home from './Components/home/home';
// import Card from './Components/Card/Card';
import Register from './Components/Register/Register';

function App() {

  return (
    <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
    {/* <Card/> */}
    {/* <Home/> */}

    </>
  )
}

export default App;
