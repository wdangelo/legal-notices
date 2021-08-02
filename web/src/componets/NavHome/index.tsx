import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar} from 'react-bootstrap'
import './style.css'

import logo from '../../assets/tri.png'

export default function Nav() {

    return(
      <>
      <div className="NavBody">
        <Navbar className="navbar" bg="dark" variant="dark">
          <img className="imgDefault" src={logo} alt="Girl in a jacket" />

          <Navbar.Brand href="#home"><h1 className="title">Sicoob Unimais Centro Leste Paulista</h1></Navbar.Brand>
          
        </Navbar>
        <br />
      </div>

    </>

    
    )    
}