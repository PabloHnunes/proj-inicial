import React from 'react';
import { AreaNav, AreaNavList } from '../NavBar/styled'

function NavBar(props){
    return(
        <AreaNav>
            <AreaNavList>
                {props.children}
            </AreaNavList>
        </AreaNav>
    );
}

export default NavBar;