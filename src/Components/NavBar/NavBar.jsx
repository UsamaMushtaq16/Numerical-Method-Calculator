import "./NavBar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useContext } from "react";
import {Link} from 'react-router-dom';
import { DarkMode } from "../../context/DarkMode";

const NavBar = () => {
  const {dispatch} = useContext(DarkMode);

  return (
    <>
      <div className='navbar'>
        <div className="wrapper">
          <div className="top">
            <Link to="/" style={{textDecoration: "none" }}>
                <span className="logo">CalQuick</span>
            </Link>
          </div>
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlinedIcon/>
          </div>
          <div className="items">
            {/* <div className="item">
              <DarkModeOutlinedIcon className="icon" onClick = {() => dispatch({type:"TOGGLE"})}/>
            </div> */}
            <div className="bottom">
              <div className="colorOption" onClick = {() => dispatch({type:"LIGHT"})}></div>
              <div className="colorOption" onClick = {() => dispatch({type:"DARK"})}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar