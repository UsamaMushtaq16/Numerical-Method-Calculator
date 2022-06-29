import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import { useState } from "react";
import './Regula.scss';

var x0, x1, x, iterate, x0_check, x1_check;
var eq;
const Regula = () => {
  const [showresult, setshowresult] = useState(false);
  const [showvalid, setshowvalid] = useState(true);

  //to evaluate expressions
  function cal(x, eq) {
    return (eval(eq));
  }

  //to store input
  function getvalue() {
    x0 = parseFloat(document.getElementById('guess1').value);
    x1 = parseFloat(document.getElementById('guess2').value);
    iterate = parseFloat(document.getElementById("iterations").value);
    eq = document.getElementById('eq').value;
    validation();
  }

  //validation of input
  function validation() {
    x0_check = cal(x0, eq);
    x1_check = cal(x1, eq);
    if (x0_check * x1_check < 0) {
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
    let f0 = cal(x0, eq).toFixed(5);
    let f1 = cal(x1, eq).toFixed(5);
      x = x0-(((x0 - x1)*f0)/(f0-f1));
      let row = document.createElement('tr');
      row.innerHTML = `<th>${i + 1}</th>
      <td>${x0.toFixed(5)}</td>
      <td>${x1.toFixed(5)}</td>
      <td>${x.toFixed(5)}</td>
      <td>${cal(x0, eq).toFixed(7)}</td>
      <td>${cal(x1, eq).toFixed(7)}</td>
      <td>${cal(x, eq).toFixed(7)}</td>`;
      if (i % 2 == 1) {
        row.style.backgroundColor = 'rgb(226, 224, 226)';
      }
      document.getElementById('tbody').appendChild(row);

      if (cal(x, eq).toFixed(2) == 0.00) {
        console.log('broken');
        document.getElementById('answer').innerText = `Your Answer is ${x.toFixed(5)}`;
        break;
      }
      else {
        if (i + 1 == iterate) {
          document.getElementById('answer').innerHTML = `Iterations are not enough!`;
        }
        if (cal(x0, eq) * cal(x, eq) < 0) {
          x1 = x;
        }
        else {
          x0 = x;
        }
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
            <p>Regula Method</p>
          </div>
          <div className="inputsec">
            <div className="input">
              <div className="left">
                <span>Enter Equation: </span>
                <input id='eq' type="text" placeholder="eg... x**2+3*x" />
              </div>
              <div className="right">
                <div className="right1">
                  <span>Guess 1 (x0): </span>
                  <input className='guess' id='guess1' type="text" placeholder="0" />
                </div>
                <div className="right2">
                  <span>Guess 2 (x1): </span>
                  <input className='guess' id='guess2' type="text" placeholder="0" />
                </div>
                <div className="right1">
                  <span>Iterations: </span>
                  <input className='guess' id='iterations' type="text" placeholder="0" />
                </div>
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
                    <th>x0</th>
                    <th>x1</th>
                    <th>x</th>
                    <th>Value of f(x0)</th>
                    <th>Value of f(x1)</th>
                    <th>Value of f(x)</th>
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

export default Regula