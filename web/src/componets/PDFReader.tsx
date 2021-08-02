import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Nav from './Nav';
import "./loader.css"
//import Loader from './Loader'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFReader() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
      }
    
    return(
    <>
    <div className="LoaderBody">
        <Nav />
        <div className="d-flex justify-content-center align-items-center flex-column">
            
            <Document
                file="/assets/docs/Manual de Instalação e Configuração VPN SSL NetExtender - 5042.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
        
    </div>

    </>
    )
}

