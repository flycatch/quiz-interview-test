import { BrowserRouter , Router, Routes, Route, Link  } from 'react-router-dom';
import Home from "./pages/home";
import Question from './pages/question';
import Result from './pages/result';

function App() {
  return (
    <BrowserRouter>
    {/* <div>
      <Link to='/'>home</Link>
    </div> */}
         <Routes>
         <Route exact path='/' element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
          </Routes>
      </BrowserRouter>
  );  
}

export default App;