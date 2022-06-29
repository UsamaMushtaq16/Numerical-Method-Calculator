import SideBar from '../../Components/SideBar/SideBar';
import NavBar from '../../Components/NavBar/NavBar';
import './Method.scss';

const List = () => {
  return (
    <div className='list'>
       <div className='container'>
        <NavBar/>
      </div>  
      <div className="right">
        <SideBar/>
      </div>
    </div>
  )
}

export default List