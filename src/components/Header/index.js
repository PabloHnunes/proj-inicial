import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Gear } from '../../assets/icons/settings.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';

import { AreaHeader } from './styled'

function Header(){
    return(
        <>
           <AreaHeader>
               <div className="container">
                    <div className="logo">
                        <img src="../../../logo.png"></img>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">
                                    <Home width='20px' height='20px'  />
                                </Link>
                            </li>
                            <li>
                                <Link to="/config">
                                    <Gear width='20px' height='20px' />
                                </Link>
                            </li>
                        </ul>
                    </nav>
               </div>
           </AreaHeader>
        </>
    );
}

export default Header;