import "./loader.css"

import engrenagem from '../assets/icons/engrenagem.svg';

export default function Loader({isLoading}: any){
    if (!isLoading) return null;
    return(
        <div id="loader"className="d-flex justify-content-center align-items-center flex-column" >
            <img src={engrenagem} alt="loader" className="mb-5"/>
            <p>Loading...</p>
        </div>
    )
}