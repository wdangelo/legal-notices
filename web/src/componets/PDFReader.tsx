import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import "./loader.css"
import Loader from './Loader';
import ControlPainel from './ControlPainel';
import NavHome from './NavHome';
//import Loader from './Loader'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFReader(props: any) {

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
        <NavHome />

        <Loader isLoading={isLoading}/>
        <section id="pdf-section">
            <div className="d-flex justify-content-center align-items-center flex-column">
                <ControlPainel numPages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                
                <Document
                    file="/assets/docs/1_Direitos e deveres.pdf"
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

