import React from 'react';
import { useHistory } from 'react-router-dom'
import { FiPhone } from "react-icons/fi"

import "./style.css"

export default function Category(){
    const history = useHistory()

    function handlePDF(){
        sessionStorage.clear()
        history.push('/category')
    }
    return(
        <>
        <div className="category-body">

        </div>

        <div onClick={handlePDF} className="category">
            
            <button className="btn-category">
                <FiPhone size={30} color="#fff"/>
            </button>
            <h3>Central de Atendimentos</h3>
            
        </div>

        </>
    )
}