import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import Nav from './Nav';
import "./loader.css"
import Loader from './Loader';
import ControlPainel from './ControlPainel';
//import Loader from './Loader'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFReader() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
        setIsLoading(false);
      }
    
    return(
    <>
    <div className="LoaderBody">
        <Nav />

        <Loader isLoading={isLoading}/>
        <section id="pdf-section">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <ControlPainel numPages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                
                <Document
                    file="/assets/docs/Manual de Instalação e Configuração VPN SSL NetExtender - 5042.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                <Page pageNumber={pageNumber} />
                </Document>
            </div>
        </section>

        
    </div>

    </>
    )
}

