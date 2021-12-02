import React, { useState } from 'react';

import { ReactComponent as Forms } from '../../assets/icons/form.svg';
import { ReactComponent as Gear } from '../../assets/icons/gear-1.svg';
import { ReactComponent as Arrow1 } from '../../assets/icons/arrow-1.svg';
import { ReactComponent as Arrow2 } from '../../assets/icons/arrow-2.svg';
import { ReactComponent as Arrow3 } from '../../assets/icons/arrow-3.svg';
import { ReactComponent as Perfil } from '../../assets/icons/perfil-1.svg';

import { CSSTransition } from 'react-transition-group';



import { AreaDropMenu, AreaMenu,AreaDropItem,AreaIconL,AreaIconR } from '../DropDownMenu/styled';

function DropDrownMenu(){
    const [ativo , setAtivo] = useState('main') ;
    const [menuHeight, setMenuHeinght] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeigth;
        setMenuHeinght(height);
    }


    function DropDrownItem( props ){
        return(
            <AreaDropItem href="/orcamento-produtos" onClick={() => props.goToMenu && setAtivo(props.goToMenu)}>
                <AreaIconL>{props.leftIcon}</AreaIconL>
                    {props.children}
                <AreaIconR>{props.rightIcon}</AreaIconR>
            </AreaDropItem>
        );
    }


    return(
        <AreaDropMenu style={{height: menuHeight}}>
            <CSSTransition 
            in={ativo === 'main'} 
            unmountOnExit 
            timeout={500}
            classNames='menu-primario'
            onEnter={calcHeight}
            >
                <AreaMenu>
                    <DropDrownItem 
                    leftIcon={<Perfil />} 
                    href="#">
                        Meu Perfil
                    </DropDrownItem>

                    <DropDrownItem 
                    leftIcon={<Gear />} 
                    rightIcon={<Arrow3 width='30px' height='30px'/>}
                    goToMenu="config">
                        Configurações
                    </DropDrownItem>
                </AreaMenu>
            </CSSTransition>

            <CSSTransition 
            in={ativo === 'config'} 
            unmountOnExit 
            timeout={500}
            classNames='menu-secundario'
            >
                <AreaMenu>
                    <DropDrownItem 
                    leftIcon={<Arrow3 className="icon-back"/>} 
                    goToMenu="main"/>

                    <DropDrownItem 
                    leftIcon={<Forms />} 
                    href="#">
                        Forms
                    </DropDrownItem>
                </AreaMenu>
            </CSSTransition>
        </AreaDropMenu>
    );
}

export default DropDrownMenu;