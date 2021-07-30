import React, { useState } from 'react'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
//import Loader from './Loader'

pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

export default function PDFReader() {

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages: nextNumPAges }: any) {
        setNumPages(nextNumPAges);
      }
    
    return(
        <div>
        <Document
            file="/assets/docs/cartaz.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
        >
        <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
    </div>
    )
}

