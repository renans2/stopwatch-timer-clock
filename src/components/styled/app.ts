import styled from "styled-components";

export const S_App = styled.div`
    background-color: ${({ theme }) => theme.colors.appBg};
    height: 100%;
    width: 100vw;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-bottom: 0px;

    @media (max-width: 768px) {
        padding: 10px;
        padding-bottom: 0px;
    }
`;
