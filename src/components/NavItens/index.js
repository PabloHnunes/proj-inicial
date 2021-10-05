import React, { useState } from 'react';

import { AreaItens, AreaLink } from '../NavItens/styled'

function NavItens(props){
    const [ open, setOpen ] = useState(false);
    
    return(
        <AreaItens>
            <AreaLink href="#" onClick={() => setOpen(!open)}>
                {props.icon}
            </AreaLink>

            {open && props.children}
        </AreaItens>
    );
}

export default NavItens;