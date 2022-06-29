import Home from "./Pages/Home/Home";
import Method from "./Pages/Method/Method";
import { BrowserRouter,Routes,Route, } from "react-router-dom";
import './style/Dark.scss';
import { useContext } from "react";
import { DarkMode } from "./context/DarkMode";
import Bisection from "./Pages/Bisection/Bisection";
import Newton from "./Pages/Newton/Newton";
import Regula from "./Pages/Regula/Regula";
import Secant from "./Pages/Secant/Secant";
import Jacobi from "./Pages/Jacobi/Jacobi";
import Gauss from "./Pages/Gauss/Gauss";
import Newton_forward from "./Pages/Newton_Forward/Newton_forward";
import Newton_backward from "./Pages/Newton_Backward/Newton_backward";
import Trapozoidal from "./Pages/Trapozoidal/Trapozoidal";
import Simpson3 from "./Pages/Simpson1by3/Simpson1by3";

function App() {

const {darkMode} = useContext(DarkMode)

  return (
    <div className={darkMode? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home/>}/>
            <Route path='documentation' element={<Method/>}/>
            <Route path='bisection' element={<Bisection/>}/>
            <Route path='newton_raphson' element={<Newton/>}/>
            <Route path='regula' element={<Regula/>}/>
            <Route path='secant' element={<Secant/>}/>
            <Route path='jacobi' element={<Jacobi/>}/>
            <Route path='gauss' element={<Gauss/>}/>
            <Route path='newton_forward' element={<Newton_forward/>}/>
            <Route path='newton_backward' element={<Newton_backward/>}/>
            <Route path='trapozoidal' element={<Trapozoidal/>}/>
            <Route path='simpson1by3' element={<Simpson3/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
