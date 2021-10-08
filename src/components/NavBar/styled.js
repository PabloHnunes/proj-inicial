import styled from "styled-components";

export const AreaNav = styled.nav`
    height: var(--nav-size);
    background-image: linear-gradient(to right, #9FCAEC, #1D4064);
    padding: 0 1rem;
    border-bottom: var(--border);
    box-shadow: 0 1px 5px black;
`;

export const AreaNavList = styled.ul`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const AreaLogo = styled.div`
    max-width: 100%;
    height: 20%;
    flex: 1;
`;

export const AreaImg = styled.img`   
    width: 50px;
    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;
    }

    @keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }
`;