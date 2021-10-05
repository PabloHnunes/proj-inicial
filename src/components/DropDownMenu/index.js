import React from 'react';
import DropDrownItem from '../DropDownItem';

import { ReactComponent as TikTok } from '../../assets/icons/tiktok.svg';
import { ReactComponent as XBox } from '../../assets/icons/x-box.svg';
import { ReactComponent as Tinder } from '../../assets/icons/tinder.svg';
import { ReactComponent as Arrow1 } from '../../assets/icons/arrow-1.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Arrow3 } from '../../assets/icons/arrow-3.svg';
import { ReactComponent as Perfil } from '../../assets/icons/perfil-1.svg';



import { AreaDropMenu } from '../DropDownMenu/styled';

function DropDrownMenu(){
    return(
        <AreaDropMenu>
            <DropDrownItem leftIcon={<Perfil />} href="#">
                Meu Perfil
            </DropDrownItem>
            <DropDrownItem leftIcon={<TikTok />} rigth={<Arrow1 />}>
                TikTok
            </DropDrownItem>
            <DropDrownItem leftIcon={<XBox />} rigth={<Arrow2 />}>
                X-box
            </DropDrownItem>
            <DropDrownItem leftIcon={<Tinder />} rigth={<Arrow3 />}>
                Tinder
            </DropDrownItem>
        </AreaDropMenu>
    );
}

export default DropDrownMenu;