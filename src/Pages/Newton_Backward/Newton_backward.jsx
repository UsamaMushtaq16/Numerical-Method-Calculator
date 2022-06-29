import React from 'react'
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import { useState } from "react";
import './Newton_backward.scss';

var table = [], iterate;
var eq, der;
const Newton_backward = () => {
    const [showresult, setshowresult] = useState(false);
    const [showvalid, setshowvalid] = useState(true);
    const [showpoints, setshowpoints] = useState(false);

    //to evaluate expressions
    function cal(x, eq) {
        return (eval(eq));
    }

    function getpoints() {
        iterate = parseInt(document.getElementById("iterate").value);
        document.getElementById('container').innerHTML = '';
        for (let i = 0; i < iterate; ++i) {
            var div = document.createElement('div');
            div.innerHTML = `
            <div>
                <span>x<sub>${i}</sub></span>
                <input className='eq' id=x${i} type="text" placeholder="0" />
            </div>
            <div>
                <span>y<sub>${i}</sub>: </span>
                <input className='eq' id=y${i} type="text" placeholder="0" />
            </div>
            `;
            document.getElementById('container').appendChild(div);
        }
        setshowpoints(true);
    }

    function calculateP() {
        let xp = parseFloat(document.getElementById('xp').value);
        let x1 = parseFloat(document.getElementById('x0').value);
        let h = parseFloat(document.getElementById('h').value);

        let p = (xp - x1) / h;
        return p;
    }

    function fact(n) {
        let result = 1;
        for (let i = 2; i <= n; ++i) {
            result = result * i;
        }
        return result;
    }
    //to store input
    function getvalue() {
        for (let i = 0; i < iterate; ++i) {
            table[i] = [];
        }
        for (let j = 0; j < iterate; ++j) {
            table[j][0] = parseFloat(document.getElementById(`y${j}`).value);
        }
        setshowresult(true);
        setshowvalid(true);
        Result();
    }

    function Result() {
        for (let i = 1; i < iterate; ++i) {
            for (let j = 0; j < iterate-i; ++j) {
                table[j][i] = table[j + 1][i - 1] - table[j][i - 1];
            }
        }
        let P = calculateP();
        let answer = table[iterate-1][0];

        answer = answer + (P * table[iterate-2][1]);
        for (let i = 2; i < iterate; ++i) {
            let totalP = P;
            for (let j = 1; j < i; ++j) {
                totalP = totalP * (P + j);
            }
            answer = answer + (totalP * (table[iterate-1-i][i] / fact(i)));
        }
        document.getElementById('answer').value = answer.toFixed(4);
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
                        <p>Newton Forward Method</p>
                    </div>
                    <div className="inputsec">
                        <div className="input">
                            <div className="left">
                                <span>Enter Points: </span>
                                <input className='eq' id='iterate' type="text" placeholder="eg... 4" />
                            </div>
                            <div className="left">
                                <span>interval (h): </span>
                                <input className='eq' id='h' type="text" placeholder="0.1" />
                            </div>
                            <div className="right">
                                <div className="right1">
                                    <span>x<sub>p</sub></span>
                                    <input className='guess' id='xp' type="text" placeholder="0" />
                                </div>
                            </div>
                        </div>
                        <div className="buttonclass">
                            <button id="getpoints" onClick={getpoints}>Get Points</button>
                        </div>
                        <div className="container" id='container'>
                        </div>
                        <div className={showvalid ? "alert" : "alertactive"}>
                            <p id='alert'>Sorry! Guesses are incorrect</p>
                        </div>
                        <div className={showpoints ? "ans" : "result"}>
                            <button id='getans' onClick={getvalue}>Get Answer</button>
                            <input id={showresult ? 'answer' : 'hidden'}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newton_backward