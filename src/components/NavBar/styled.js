import styled from "styled-components";

export const AreaNav = styled.nav`
    height: var(--nav-size);
    background-image: linear-gradient(to right, #9FCAEC, #1D4064);
    padding: 0 1rem;
    border-bottom: var(--border);
`;

export const AreaNavList = styled.ul`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const AreaLogo = styled.div`
    flex: 1;
    img{
        width: 50px;
    }
`;