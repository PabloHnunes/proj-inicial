import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/logo-js.png";
import { ReactComponent as Gear } from '../../assets/icons/settings.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Users } from '../../assets/icons/users.svg';

import { AreaHeader, AreaLista } from './styled'

const lista = ['Home','Usuários','Configurações'];

function Header(){
    const [ select, setActive] = useState('list');
    return(
        <>
           <AreaHeader>
               <div className="container">
                    <div className="logo">
                        <img src={Logo}></img>
                    </div>
                    <div className='navigation'>
                        <AreaLista>
                            {/* <li className={select} name='home'>
                                <Link className='link' to="#">
                                    <span className="icon"><Home className='icone'  /></span>
                                    <span className="title">Home</span>
                                </Link>
                            </li>
                            <li className={select} name='user'>
                                <Link className='link' to="#">
                                    <span className="icon"><Users className='icone'  /></span>
                                    <span className="title">Usuários</span>
                                </Link>
                            </li>
                            <li className={select} name='config' onClick={handleChangeActive}>
                                <Link className='link' to="#">
                                    <span className="icon"><Gear className='icone' /></span>
                                    <span className="title">Configuração</span>
                                </Link>
                            </li> */}
                            {lista.map((titulo,index) => {
                                return(
                                    <li className={select} key={index}>
                                        <Link className='link' to="#">
                                            <span className="icon"><Gear className='icone' /></span>
                                            <span className="title">{titulo}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </AreaLista>
                    </div>
               </div>
           </AreaHeader>
        </>
    );
}

export default Header;