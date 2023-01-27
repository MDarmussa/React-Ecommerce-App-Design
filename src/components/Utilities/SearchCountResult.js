import React from 'react'
import UnopDropdown from "unop-react-dropdown";

import sort from '../../images/sort.png'


function SearchCountResult({title, onClick}) {
     const handler = () => {}

     const clickMe = (key) => {
          localStorage.setItem("sortType", key);
          onClick();
     }
  return (
     <div className="d-flex justify-content-between pt-3 px-2">
               <div className="sub-tile">{title}</div>
               <div className="search-count-text d-flex ">
                    <UnopDropdown
                    onAppear={handler}
                    onDisappearStart={handler}
                    trigger={
                         <p className="mx-1">
                              <img
                                   width="20px"
                                   height="20px"
                                   className="ms-1"
                                   src={sort}
                                   alt=""
                              />
                              Sort by:
                         </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover>
               <div className="card-filter">
                    <div onClick={() => clickMe("")} className="border-bottom card-filter-item">Recommended-No Sort</div>
                    <div onClick={() => clickMe("Most Sold")}  className="border-bottom card-filter-item">Most Sold</div>
                    <div onClick={() => clickMe("Highest Review")}  className="border-bottom card-filter-item">Highest Review</div>
                    <div onClick={() => clickMe("Price Low to high")}  className="border-bottom card-filter-item">
                         Price Low to high
                    </div>
                    <div onClick={() => clickMe("Price high to low")}  className=" card-filter-item">Price high to low</div>
                    <div onClick={() => clickMe("Most Availability")}  className=" card-filter-item">Most Availability</div>

               </div>
               </UnopDropdown>
               </div>
     </div>
  )
}

export default SearchCountResult