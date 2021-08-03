import React from "react";

import "./loader.css"

export default function Loader({isLoading}: any){
    if (!isLoading) return null;
    return(
        <div id="loader"className="d-flex justify-content-center align-items-center flex-column" >
            <img src="https://react-pdf.org/images/logo.png" alt="loader" className="mb-5"/>
            <p>Loading...</p>
        </div>
    )
}