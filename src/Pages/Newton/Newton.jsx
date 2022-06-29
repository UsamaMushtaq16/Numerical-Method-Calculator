import React from 'react'
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import { useState } from "react";
import './Newton.scss';

var x, iterate , eq_check , der_check;
var eq, der;
const Newton = () => {
    const [showresult, setshowresult] = useState(false);
    const [showvalid, setshowvalid] = useState(true);

    //to evaluate expressions
    function cal(x, eq) {
        return (eval(eq));
    }

    //to store input
    function getvalue() {
        eq = document.getElementById('eq').value;
        der = document.getElementById('der').value;
        x = parseFloat(document.getElementById('guess').value);
        iterate = parseFloat(document.getElementById("iterations").value);
        
        validation();
    }

    //validation of input
    function validation() {
        eq_check = cal(x, eq);
        der_check = cal(x, der);
        if (der_check != 0) {
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
            let row = document.createElement('tr');
            row.innerHTML = `<th>${i + 1}</th>
        <td>${x}</td>
        <td>${cal(x,eq).toFixed(5)}</td>
        <td>${cal(x,der).toFixed(5)}</td>
        <td>${x-(cal(x,eq).toFixed(5)/cal(x,der).toFixed(4))}</td>
        <td>${cal(x-(cal(x,eq).toFixed(5)/cal(x,der).toFixed(5)),eq)}`;
            if (i % 2 == 1) {
                row.style.backgroundColor = 'rgb(226, 224, 226)';
            }
            document.getElementById('tbody').appendChild(row);

            if (cal(x-(cal(x,eq).toFixed(5)/cal(x,der).toFixed(5)), eq).toFixed(1) == 0.0) {
                console.log('broken');
                document.getElementById('answer').innerText = `Your Answer is ${x-(cal(x,eq).toFixed(5)/cal(x,der).toFixed(5))}`;
                break;
            }
            else {
                if (i + 1 == iterate) {
                    document.getElementById('answer').innerHTML = `Iterations are not enough!`;
                }
                else {
                    x = cal(x-(cal(x,eq).toFixed(5)/cal(x,der).toFixed(5)), eq).toFixed(4);
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
                        <p>Newton Raphson Method</p>
                    </div>
                    <div className="inputsec">
                        <div className="input">
                            <div className="left">
                                <span>Enter Equation: </span>
                                <input className='eq' id='eq' type="text" placeholder="eg... x**2+3*x" />
                            </div>
                            <div className="left">
                                <span>First Derivative: </span>
                                <input className='eq' id='der' type="text" placeholder="eg... 2*x+3" />
                            </div>
                            <div className="right">
                                <div className="right1">
                                    <span>Initila Guess x: </span>
                                    <input className='guess' id='guess' type="text" placeholder="0" />
                                </div>
                                <div className="right2">
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
                                        <th>x</th>
                                        <th>f(x)</th>
                                        <th>f'(x)</th>
                                        <th>x1</th>
                                        <th>f(x1)</th>
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

export default Newton