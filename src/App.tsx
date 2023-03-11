import HelloPage from "./component/HelloPage";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import CounterPage from "./component/CounterPage";

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<HelloPage />}/>
        <Route path="/counter" element={<CounterPage/>}/>
        <Route path="/*" element={<div>Not Found</div>}/>
      </Routes>
    </BrowserRouter>
    
);

export default App;
