// Include links to the about me, portfolio, contact and resume 
//The page you are on should be highlighted- page does not reload 
//e.preventDefault()
import React from 'react';

function Nav({ currentPage, handlePageChange}){
    return (
        <ul className="nav nav-tabs">
            {['Home','Portfolio', 'contact'].map(page => {
                return( 
                    <li className="nav-item">
                        <a href={"#" + page.toLowerCase()}
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? 'nav-link active' : 'nav-link'}
                        >
                        {page}
                        </a>
                    </li>
                )
            })}
            {/* <li className="nav-item">
                <a href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                Home
                </a>
            </li>
            <li className="nav-item">
               
                <a href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li> */}
            
        </ul>
    )
}