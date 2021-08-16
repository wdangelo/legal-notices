import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar} from 'react-bootstrap'
import {BiHomeCircle} from "react-icons/bi"
import './style.css'

import logo from '../../assets/icons/tri.png'

export default function Nav() {
  const history = useHistory();

  function handleHome(){
    sessionStorage.clear()
    history.push(`/`)
}
    return(
      <>
        
        <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
        <BiHomeCircle onClick={handleHome} color="#fff" size={40} className="btn-home"/>
          <img className="imgDefault" src={logo} alt="Logo Sicoob" />

          <Navbar.Brand href="#home"><h1 className="title">Sicoob Unimais Centro Leste Paulista</h1></Navbar.Brand>
          
        </Navbar>
        <br />
    </>

    
    )    
}