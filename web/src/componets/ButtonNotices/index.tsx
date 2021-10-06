import folha from '../../assets/icons/folha.svg';
import { useHistory } from 'react-router-dom'

import './style.css'

const atendimentoPdfcentralAtendimento = {
    id: 1,
    name: "centralatendimento.pdf",
    id_category: 1
    
}

const atendimentoPdfCooperado = {
    id: 1,
    name: "Atendimento ao cooperado 5042.pdf",
    id_category: 1
    
}

function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();

    function handlePDF(){
        sessionStorage.clear()
        history.push(`/category/${atendimentoPdfcentralAtendimento.name}`)
    }
    function handlePDF2(){
        sessionStorage.clear()
        history.push(`/category/${atendimentoPdfCooperado.name}`)
    }

    return (
        <div className="btn-notices-boddy">
            <div className="btn-notice">
                <tr>
                    <td>
                        <button onClick={handlePDF}>
                            <img src={folha} alt="Botão de avisos" />
                        </button>
                    </td>
                    <td><h3>Central de Atendimento</h3></td>
                </tr>
                <hr></hr>
                <tr>
                    <td>
                        <button onClick={handlePDF2}>
                            <img src={folha} alt="Botão de avisos" />
                        </button>
                    </td>
                    <td><h3>Atendimento ao Cooperado</h3></td>
                </tr>
            </div>
            
        </div>
    )
}

export default index
