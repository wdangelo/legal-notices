import { useHistory } from 'react-router-dom'

import "./style.css"

import folha from '../../assets/icons/folha.svg';
import central from '../../assets/icons/central.svg';
import map from '../../assets/icons/map.svg';

const ListPDF = {
    id: 1,
    name: "cartaz.pdf",
    id_category: 1
    
}

export default function Category(){
    const history = useHistory();

    function handlePDF(){
        sessionStorage.clear()
        history.push(`/category/${ListPDF.name}`)
    }

    function handleNotice(){
        sessionStorage.clear()
        history.push(`/notice`)
    }
    return(
        <>
        <div className="category-body">
            <table>

                <tr>
                    <td>

                        <div onClick={handlePDF} className="category">
                            
                            <button>
                                <img src={central} alt="Pasta de aviso legais" />
                                <h3>Central de Atendimentos </h3>
                            </button>
                            
                            
                        </div>
                    </td>

                    <td>

                        <div onClick={handleNotice} className="category">
                            
                            <button>
                                <img src={folha} alt="Pasta de aviso legais" />
                                <h3>Avisos</h3>
                            </button>

                            
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>

                        <div onClick={handlePDF} className="category">
                            
                            <button>
                                <img src={map} alt="Pasta de aviso legais" />
                                <h3>Rede de Atendimento</h3>
                            </button>

                            
                        </div>
                    </td>

                    <td>

                        <div onClick={handlePDF} className="category">
                            
                            <button>
                                <img src={folha} alt="Pasta de aviso legais" />
                                <h3>Avisos Obrigatórios</h3>
                            </button>

                            
                        </div>
                    </td>
                </tr>

                

            </table>

        </div>


        </>
    )
}