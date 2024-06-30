import Product from "./Components/Home/Product";
// import Home from "./Components/Home/Product"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route
            path="/tailwind"
            element={
              <h1 className="text-3xl font-bold underline">Hello world!</h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
