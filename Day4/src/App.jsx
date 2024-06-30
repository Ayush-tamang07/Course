import EditForm from "./Components/Form/Edit/EditForm";
// import Form from "./Components/Form/Form";
import UploadForm from "./Components/Form/UploadForm/UploadForm";
import StackedLightHeaderAndFooter from "./Components/New folder/StackedLightHeaderAndFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/home' element={<StackedLightHeaderAndFooter/>} />
          <Route path='/editForm' element={<EditForm />} />
          <Route path='/uploadForm' element={<UploadForm />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}
