import styled from 'styled-components';


export const AreaDropItem = styled.a`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    transition: background var(--speed);
    padding: 0.5rem;
    :hover{
        background-color: #525357;
    }
`;

export const AreaSpanR = styled.span`
    margin-left: auto;
`;

export const AreaSpanL = styled.span`
    margin-right: auto;
`;