import folha from '../../assets/icons/folha.svg';

import './style.css'

function index() {
    return (
        <div className="btn-notices-boddy">
            <div className="btn-notice">
                <tr>
                    <td>
                        <button>
                            <img src={folha} alt="Botão de avisos" />
                        </button>
                    </td>
                    <td><h3>Direitos e deveres dos Cooperados</h3></td>
                </tr>
                <hr></hr>
                <tr>
                    <td>
                        <button>
                            <img src={folha} alt="Botão de avisos" />
                        </button>
                    </td>
                    <td><h3>Direitos e deveres dos Cooperados</h3></td>
                </tr>
            </div>
            
        </div>
    )
}

export default index
