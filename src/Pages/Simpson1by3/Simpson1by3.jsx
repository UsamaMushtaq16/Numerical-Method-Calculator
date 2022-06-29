import React from 'react'
import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import { useState } from "react";
import './Simpson1by3.scss';

var table = [], iterate;
const Simpson3 = () => {
    const [showresult, setshowresult] = useState(false);
    const [showvalid, setshowvalid] = useState(true);
    const [showpoints, setshowpoints] = useState(false);

    //to evaluate expressions
    function calculateodd() {
        let sum=0;
        for (let j = 1; j < iterate-1; j+2) {
            sum=sum+(2*table[j]);
        }
        
        return sum;
    }
    function calculateven() {
        let sum=0;
        for (let j = 0; j < iterate-1; j+2) {
            sum=sum+(2*table[j]);
        }
        
        return sum;
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
        setshowresult(!showresult);
    }

    function calculateh() {
        let x0 = parseFloat(document.getElementById('x0').value);
        let x1= parseFloat(document.getElementById('x1').value);

        console.log(x1-x0);
        return x1-x0;
    }
    //to store input
    function getvalue() {
        for (let j = 0; j < iterate; ++j) {
            table[j] = parseFloat(document.getElementById(`y${j}`).value);
        }
        setshowresult(true);
        setshowvalid(true);
        Result();
    }

    function Result() {
        let h = calculateh();
        let oddval = calculateodd();
        let evenval = calculateven();
        let answer;
        answer = (h/3)*(table[0]+table[iterate-1]+oddval+evenval)
        document.getElementById('answer').innerText = answer.toFixed(3);
        answer=0;
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
                            <p id={showresult ? 'answer' : 'hidden'}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simpson3