import { useHistory } from 'react-router-dom'
import { FiX } from "react-icons/fi"
import {FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa"
import "./style.css"

export default function ControlPainel(props: any) {
    const { pageNumber, numPages, setPageNumber } = props;

    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === numPages;

    const firstPageClass = isFirstPage ? 'disable' : 'clickable';
    const lastPageClass = isLastPage ? 'disable' : 'clickable';

    const history = useHistory()

    function goToFirstPage() {
        if (!isFirstPage) setPageNumber(1);
    };

    function goToPreviousPage() {
        if (!isFirstPage) setPageNumber(pageNumber - 1);
    };

    function goToNextPage() {
        if (!isLastPage) setPageNumber(pageNumber + 1);
    };

    function goToLastPage() {
        if (!isLastPage) setPageNumber(numPages);
    };

    function handleExit() {
        sessionStorage.clear()
        history.push('/')
      }

    return(
        <div className="control-painel">
            <button className="btn-ctrl"><i onClick={goToFirstPage} className={firstPageClass}><FaAngleDoubleLeft  size="30" color="#fff" /></i></button>
            
            <button className="btn-ctrl"><i onClick={goToPreviousPage} className={firstPageClass}><FaAngleLeft  size="30" color="#fff" /></i></button>
            
            <span>Page {pageNumber} of {numPages}</span>
            <button className="btn-ctrl"><i onClick={goToNextPage} className={lastPageClass} ><FaAngleRight size="30" color="#fff"/></i></button>
            <button className="btn-ctrl"><i onClick={goToLastPage} className={lastPageClass}  ><FaAngleDoubleRight size="30" color="#fff" /></i></button>

            <button className="btn-exit" onClick={handleExit} ><FiX size="30" color="#fff" /></button>
            
            
        </div>
    )
}