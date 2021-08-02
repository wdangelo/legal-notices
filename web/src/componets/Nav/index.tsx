import React from 'react'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Button} from 'react-bootstrap'
import { BsBoxArrowInLeft } from 'react-icons/bs'
import './style.css'

import logo from '../../assets/tri.png'

export default function Nav() {
    const history = useHistory()

    

    function handleExit() {
      sessionStorage.clear()
      history.push('/')
    }
    
    return(
      <>
      
      <Navbar className="navbar" bg="dark" variant="dark" style={{background: '#072C36'}}>
        <img className="imgDefault" src={logo} alt="Girl in a jacket" />

        <Navbar.Brand href="#home"><h1 className="title">Sicoob Unimais Centro Leste Paulista</h1></Navbar.Brand>
    
        <Button className="btnav" onClick={handleExit} variant="danger"><BsBoxArrowInLeft size={30} color="#072C36" /></Button>
        
      </Navbar>
      <br />
    </>

    
    )    
}