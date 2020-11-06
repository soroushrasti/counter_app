import React from 'react';
const NavBar =(props) =>{
        return ( <nav className='navbar navbar-light bg-light' >
            <a className='navbar-broad' href='vhgchgc' >
                NavBar
                <span className=' m-2 badge badge-pill badge-secondary'> {props.totalCounters} </span>

            </a>

        </nav> );
    
}
 
export default NavBar;