import "./SideBar.scss"
import CalculateIcon from '@mui/icons-material/Calculate';
import ArticleIcon from '@mui/icons-material/Article';
import { useState } from "react";
import {Link} from 'react-router-dom';
import Widget from "../Widget/Widget";

const SideBar = () => {
    const [showmethod,setshowmethod] = useState(true);
    const handleclick = () => 
    {
        setshowmethod(!showmethod);
        console.log(showmethod);
    }
  
  return (
    <>
        <div className="sidebar">
            <div className="left">
                <ul>
                    <li onClick={handleclick}>
                        <CalculateIcon className="icons"/>
                        <span>Calculator</span>
                    </li>
                    <div className= {showmethod? "methodactive" : "method"} >
                        <Widget/>
                    </div>
                    <Link to="/documentation" style={{textDecoration: "none" }}>
                        <li>
                            <ArticleIcon className="icons"/>
                            <span>Documentation</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </>
  )
}

export default SideBar