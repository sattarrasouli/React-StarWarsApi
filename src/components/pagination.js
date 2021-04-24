import React from "react";
import '../App.css'


const Pagination = ({goToNextPage , goToPrevPage}) => {
 
  return(
    <ul className="pagination">
      {goToPrevPage && <a onClick={goToPrevPage}>Previous </a>}
      {goToNextPage && <a onClick={goToNextPage}>Next </a>}
      
    </ul>
  )
}

export default Pagination;