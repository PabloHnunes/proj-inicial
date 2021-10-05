import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: var(--nav-size);
    background-image: linear-gradient(to right, #9FCAEC, #1D4064);
    border-bottom: var(--border);
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        aling-itens: center;
    }

    .logo{
        flex: 1;
        img{
            width: 50px;
        }
    }

    nav{
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }
        li{
            list-style: none;
            margin-left: 20px;
            a{
                text-decoration: none;
                color: var(--text-color);
            }
        }
    }
`;