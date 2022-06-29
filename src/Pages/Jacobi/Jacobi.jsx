import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import { useState } from "react";
import './Jacobi.scss';

var x, y, z, x1, y1, z1, iterate;
var eq1, eq2, eq3;
const Jacobi = () => {
  const [showresult, setshowresult] = useState(false);
  const [showvalid, setshowvalid] = useState(true);

  //to evaluate expressions
  function calx(y, z, eq1) {
    return (eval(eq1));
  }
  //to evaluate expressions
  function caly(x, z, eq2) {
    console.log(x);
    console.log(z);
    console.log(eq2);
    console.log(eval(eq2));
    return (eval(eq2));
  }
  //to evaluate expressions
  function calz(x, y, eq3) {
    return (eval(eq3));
  }

  //to store input
  function getvalue() {
    eq1 = document.getElementById('eq1').value;
    eq2 = document.getElementById('eq2').value;
    eq3 = document.getElementById('eq3').value;
    x = parseFloat(document.getElementById('x0').value);
    y = parseFloat(document.getElementById('y0').value);
    z = parseFloat(document.getElementById('z0').value);
    iterate = parseInt(document.getElementById('iterate').value);
    validation();
  }

  //validation of input
  function validation() {
    if ((calx(y, z, eq1) && caly(x, z, eq2) && calz(x, y, eq3)) != 0) {
      setshowvalid(true);
      setshowresult(true);
      document.getElementById('tbody').innerHTML = '';
      Result();
    }
    else {
      setshowvalid(false);
      setshowresult(false);
    }
  }
  function Result() {
    for (let i = 0; i < iterate; ++i) {
      var x1 = calx(y, z, eq1);
      var y1 = caly(x, z, eq2);
      var z1 = calz(x, y, eq3);

      let row = document.createElement('tr');
      row.innerHTML = `<th>${i + 1}</th>
      <td>${x.toFixed(5)}</td>
                      <td>${y.toFixed(5)}</td>
                      <td>${z.toFixed(5)}</td>
                      <td>${x1.toFixed(5)}</td>
                      <td>${y1.toFixed(5)}</td>
                      <td>${z1.toFixed(5)}</td>`;
      if (i % 2 == 1) {
        row.style.backgroundColor = 'rgba(0, 0, 0, 0.157)';
      }
      document.getElementById('tbody').appendChild(row);
      if ((x1 - x).toFixed(2) == 0.0 && (y1 - y).toFixed(2) == 0.0 && (z1 - z).toFixed(2) == 0.0) {
        document.getElementById('answer').innerText = `Your Answer is ${x1.toFixed(1)},${y1.toFixed(1)},${z1.toFixed(1)}`;
        break;
      }
      else {
        if (i + 1 == iterate) {
          document.getElementById('answer').innerHTML = `Your iterations are not enough! inrease them`;
        }
        x = x1;
        y = y1;
        z = z1;
      }
    }
  }


  return (
    <div className='bisection'>
      <div className='container'>
        <NavBar />
      </div>
      <div className="right">
        <SideBar />
        <div className='calculation'>
          <div className="label">
            <p>Jacobi Method</p>
          </div>
          <div className="inputsec">
            <div className="input">
              <div className="left">
                <span>Enter Equation1: </span>
                <input id='eq1' type="text" placeholder="eg... (5+3*y+z)/3" />
              </div>
              <div className="right">
                <div className="right1">
                  <span>Enter Equation2: </span>
                  <input id='eq2' type="text" placeholder="eg... (3-2*x+z)/5" />
                </div>
                <div className="right2">
                  <span>Enter Equation3: </span>
                  <input id='eq3' type="text" placeholder="eg... (10+7*x+3*y)/7" />
                </div>
              </div>
            </div>
            <div className="value">
              <div>
                <span>x<sub>i</sub>: </span>
                <input className='input1' id='x0' type="text" placeholder="0" />
              </div>
              <div>
                <span>y<sub>i</sub></span>
                <input className='input1' id='y0' type="text" placeholder="0" />
              </div>
              <div>
                <span>z<sub>i</sub></span>
                <input className='input1' id='z0' type="text" placeholder="0" />
              </div>
              <div>
                <span>Iterations: </span>
                <input className='input1' id='iterate' type="text" placeholder="0" />
              </div>
            </div>
            <div className={showvalid ? "alert" : "alertactive"}>
              <p id='alert'>Sorry! Guesses are incorrect</p>
            </div>
            <div className="ans">
              <button id='getans' onClick={getvalue}>Get Answer</button>
              <label id={showresult ? 'answer' : 'hidden'}></label>
            </div>
            <div className={showresult ? "resultactive" : "result"}>
              <table>
                <thead>
                  <tr>
                    <th>Sr#</th>
                    <th>x<sub>0</sub></th>
                    <th>y<sub>0</sub></th>
                    <th>z<sub>0</sub></th>
                    <th>x<sub>i+1</sub></th>
                    <th>y<sub>i+1</sub></th>
                    <th>z<sub>i+1</sub></th>
                  </tr>
                </thead>
                <tbody id='tbody'>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jacobi