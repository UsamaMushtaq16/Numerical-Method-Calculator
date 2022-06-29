import React from 'react';
import './Widget.scss';
import {Link} from 'react-router-dom';

const Widget = () => {
  return (
    <>
      <div className='widget'>
       <p className='type'>Solution of Linear Equations</p>
        <ul className='ul'>
          <Link to="/bisection" style={{textDecoration: "none" }}><li className='li'><span>Bisection Method</span></li></Link>
          <Link to="/newton_raphson" style={{textDecoration: "none" }}><li className='li'><span>Newton Raphson Method</span></li></Link>
          <Link to="/regula" style={{textDecoration: "none" }}><li className='li'><span>Regula Falsi Method</span></li></Link>
          <Link to="/secant" style={{textDecoration: "none" }}><li className='li'><span>Secant Method</span></li></Link>
        </ul>
      </div>
      <div className='widget'>
       <p className='type'>Solution of Non-linear Equations</p>
        <ul className='ul'>
          <Link to="/jacobi" style={{textDecoration: "none" }}><li className='li'><span>Jacobi Method</span></li></Link>
          <Link to="/gauss" style={{textDecoration: "none" }}><li className='li'><span>Gauss Seidel Method</span></li></Link>
        </ul>
      </div>
      <div className='widget'>
       <p className='type'>Solution of Interpolation</p>
        <ul className='ul'>
          <Link to="/newton_forward" style={{textDecoration: "none" }}><li className='li'><span>Newton Forward</span></li></Link>
          <Link to="/newton_backward" style={{textDecoration: "none" }}><li className='li'><span>Newton Backward</span></li></Link>
        </ul>
      </div>
      <div className='widget'>
       <p className='type'>Solution of ODE's</p>
        <ul className='ul'>
            <li className='li'><span>Euler's Method</span></li>
            <li className='li'><span>Picard Method</span></li>
        </ul>
      </div>
      <div className='widget'>
       <p className='type'>Numerical Integration</p>
        <ul className='ul'>
          <Link to="/trapozoidal" style={{textDecoration: "none" }}><li className='li'><span>Trapozoidal</span></li></Link>
          <Link to="/sempson1by3" style={{textDecoration: "none" }}><li className='li'><span>Simpson 1/3 Rule</span></li></Link>
          <li className='li'><span>Simpson 3/8 Rule</span></li>
        </ul>
      </div>
    </>  
  )
}

export default Widget