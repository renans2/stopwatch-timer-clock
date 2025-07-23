import styled from "styled-components";

export const S_App = styled.div`
    background-color: ${({ theme }) => theme.colors.appBg};
    height: 100%;
    width: 100%;
    max-width: 700px;
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
`;
