import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
// import Button from './Components/Button/Button';
import LearningButton from './Components/LearnignButton/LearningButton';
import HeadingComponent from './Components/HeadingComponent/HeadingComponent';
// import Form from './Components/Form/Form'

function App() {

  return (
    <>
    {/* <NavBar/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/button' element={<LearningButton/>} />
        <Route path='/heading' element={<HeadingComponent/>} />
        {/* <Route path='/form' element={<Form/>} /> */}
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App;
