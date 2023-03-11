import HelloPage from "./component/HelloPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route
          path="/hello"
          element={<HelloPage />}
        />
        <Route
          path="/*"
          element={<div>Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
    
);

export default App;
