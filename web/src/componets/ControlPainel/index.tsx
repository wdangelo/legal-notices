import {FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa"
import "./style.css"

export default function ControlPainel(props: any) {
    const { pageNumber, numPages, setPageNumber } = props;

    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === numPages;

    const firstPageClass = isFirstPage ? 'disable' : 'clickable';
    const lastPageClass = isLastPage ? 'disable' : 'clickable';

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

    return(
        <div className="control-painel">

            <i onClick={goToFirstPage} className={firstPageClass}><FaAngleDoubleLeft  size="70" color="#fff" /></i>
            <i onClick={goToPreviousPage} className={firstPageClass} ><FaAngleLeft  size="70" color="#fff"/></i>
            
            <span>Page {pageNumber} of {numPages}</span>
            <i onClick={goToNextPage} className={lastPageClass} ><FaAngleRight size="70" color="#fff"/></i>
            <i onClick={goToLastPage} className={lastPageClass}  ><FaAngleDoubleRight size="70" color="#fff" /></i>
            
        </div>
    )
}