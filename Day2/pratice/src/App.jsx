// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Form from './Components/Form/Form';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/home/home';
// import Card from './Components/Card/Card';

function App() {

  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Form/>} />
        <Route path='/home' element={<NavBar/>} />
      </Routes>
    </BrowserRouter> */}
    <NavBar/>
    <Home/>
    {/* <Card/> */}
    </>
  )
}

export default App;
