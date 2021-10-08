import styled from 'styled-components'


export const AreaDropMenu = styled.div`
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translateX(-45%);
    background-color: var(--bg);
    border: var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    overflow: hidden;
    box-shadow: 3px 3px 10px black;
    
    transition: height var(--speed) ease;

    .menu-primario-enter {
        position: absolute;
        transform: translateX(-110%);
    }

    .menu-primario-enter-active {
        transform: translateX(0%);
        transition: all var(--speed) ease;
    }

    .menu-primario-exit {
        position: absolute;
    }

    .menu-primario-exit-active{
        transform: translateX(-110%);
        transition: all var(--speed) ease;
    }

    .menu-secundario-enter {
        transform: translateX(110%);
    }

    .menu-secundario-enter-active {
        transform: translateX(0%);
        transition: all var(--speed) ease;
    }

    .menu-secundario-exit {
    }

    .menu-secundario-exit-active{
        transform: translateX(110%);
        transition: all var(--speed) ease;
    }

`;

export const AreaMenu = styled.div`
    width: 100%;
`;

export const AreaDropItem = styled.a`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
    :hover{
        background-color: var(--color-itens-bg);
        color: #000000;
    }
`;

export const AreaIconR = styled.span`
    margin-left: auto;
`;

export const AreaIconL = styled.span`
    --button-size: calc(var(--nav-size) * 0.5);
    width: var(--button-size);
    height: var(--button-size);
    background-color: #6888a1;
    border-radius: 50%;
    padding: 5px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: filter 300ms;
    :hover{
        filter: brightness(1.2);
    }
    .icon-back{
        transform: rotate(180deg);
    }
`;