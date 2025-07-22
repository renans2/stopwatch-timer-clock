import styled from "styled-components";

export const S_ToggleThemeButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    width: 120px;
    padding: 15px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.regularBg};
    color: ${({ theme }) => theme.colors.regularText};
`;