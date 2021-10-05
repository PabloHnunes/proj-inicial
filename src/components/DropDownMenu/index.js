import React from 'react';
import DropDrownItem from '../DropDownItem';

import { ReactComponent as TikTok } from '../../assets/icons/tiktok.svg';
import { ReactComponent as XBox } from '../../assets/icons/x-box.svg';
import { ReactComponent as Tinder } from '../../assets/icons/tinder.svg';
import { ReactComponent as Arrow1 } from '../../assets/icons/arrow-1.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Arrow3 } from '../../assets/icons/arrow-3.svg';


import { AreaDropMenu } from '../DropDownMenu/styled';

function DropDrownMenu(){
    return(
        <AreaDropMenu>
            <DropDrownItem href="#">
                Meu Perfil
            </DropDrownItem>
            <DropDrownItem leftIcon={<TikTok />} rigth={<Arrow1 />}>

            </DropDrownItem>
            <DropDrownItem leftIcon={<XBox />} rigth={<Arrow2 />}>

            </DropDrownItem>
            <DropDrownItem leftIcon={<Tinder />} rigth={<Arrow3 />}>

            </DropDrownItem>
        </AreaDropMenu>
    );
}

export default DropDrownMenu;