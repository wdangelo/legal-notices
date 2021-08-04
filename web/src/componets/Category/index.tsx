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
            
            <table >
                <tr>
                    <td><button>Central de Atendimento</button> <button>Direitos e Deveres dos Cooperados</button></td>
                    <td>linha 1, célula 2</td>
                </tr>
                <tr>
                    <td>linha 2, célula 1</td>
                    <td>linha 2, célula 2</td>
                </tr>
            </table>

        </div>

        <div onClick={handlePDF} className="category">
            
            <button className="btn-category">
                <FiPhone size={30} color="#fff"/>
            </button>
            <h3>Central de Atendimentos</h3>
            
        </div>

        <div onClick={handlePDF} className="category">
            
            <button className="btn-category">
                <FiPhone size={30} color="#fff"/>
            </button>
            <h3>Direitos e Deveres dos Cooperados</h3>
            
        </div>

        </>
    )
}