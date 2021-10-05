import React from 'react';
import { AreaNav, AreaNavList, AreaLogo } from '../NavBar/styled';

function NavBar(props){
    return(
        <AreaNav>
            <AreaLogo>
                <img src="../../../public/logo.png"></img>
            </AreaLogo>
            <AreaNavList>
                {props.children}
            </AreaNavList>
        </AreaNav>
    );
}

export default NavBar;