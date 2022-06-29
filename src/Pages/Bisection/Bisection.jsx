import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import { useState } from "react";
import './Bisection.scss';

var a, b, c, iterate, acheck, bcheck;
var eq;
const Bisection = () => {
  const [showresult, setshowresult] = useState(false);
  const [showvalid, setshowvalid] = useState(true);

  //to evaluate expressions
  function cal(x, eq) {
    return (eval(eq));
  }

  //to store input
  function getvalue() {
    a = parseFloat(document.getElementById('guess1').value);
    b = parseFloat(document.getElementById('guess2').value);
    iterate = parseFloat(document.getElementById("iterations").value);
    eq = document.getElementById('eq').value;
    validation();
  }

  //validation of input
  function validation() {
    acheck = cal(a, eq);
    bcheck = cal(b, eq);
    if (acheck * bcheck < 0) {
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
      c = (a + b) / 2;
      let row = document.createElement('tr');
      row.innerHTML = `<th>${i + 1}</th>
      <td>${a.toFixed(5)}</td>
      <td>${b.toFixed(5)}</td>
      <td>${c.toFixed(5)}</td>
      <td>${cal(a, eq).toFixed(7)}</td>
      <td>${cal(b, eq).toFixed(7)}</td>
      <td>${cal(c, eq).toFixed(7)}</td>`;
      if (i % 2 == 1) {
        row.style.backgroundColor = 'rgb(226, 224, 226)';
      }
      document.getElementById('tbody').appendChild(row);

      if (cal(c, eq).toFixed(2) == 0.00) {
        console.log('broken');
        document.getElementById('answer').innerText = `Your Answer is ${c.toFixed(5)}`;
        break;
      }
      else {
        if (i + 1 == iterate) {
          document.getElementById('answer').innerHTML = `Iterations are not enough!`;
        }
        if (cal(a, eq) * cal(c, eq) < 0) {
          b = c;
        }
        else {
          a = c;
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
            <p>Bisection Method</p>
          </div>
          <div className="inputsec">
            <div className="input">
              <div className="left">
                <span>Enter Equation: </span>
                <input id='eq' type="text" placeholder="eg... x**2+3*x" />
              </div>
              <div className="right">
                <div className="right1">
                  <span>Guess 1 (a): </span>
                  <input className='guess' id='guess1' type="text" placeholder="0" />
                </div>
                <div className="right2">
                  <span>Guess 2 (b): </span>
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
                    <th>Guess a</th>
                    <th>Guess b</th>
                    <th>Next Guess c</th>
                    <th>Value of f(a)</th>
                    <th>Value of f(b)</th>
                    <th>Value of f(c)</th>
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

export default Bisection