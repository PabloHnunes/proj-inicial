import React from 'react';

import { AreaDropItem, AreaSpanR, AreaSpanL } from '../DropDownItem/styled';

function DropDrownItem(props){
    return(
        <AreaDropItem>
            <AreaSpanL>{props.leftIcon}</AreaSpanL>
                {props.children}
            <AreaSpanR>{props.rightIcon}</AreaSpanR>
        </AreaDropItem>
    );
}

export default DropDrownItem;