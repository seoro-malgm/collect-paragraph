import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./layouts/Main";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="App">
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Main>
    </div>
  );
}

export default App;
