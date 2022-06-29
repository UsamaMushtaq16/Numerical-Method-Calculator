import SideBar from '../../Components/SideBar/SideBar'
import NavBar from '../../Components/NavBar/NavBar'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'> 
      <div className='container'>
        <NavBar/>
      </div>  
      <SideBar/>
    </div>
  )
}

export default Home