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
    border-radius: 15px;
    border: none;
    width: 120px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.regularBg};
    color: ${({ theme }) => theme.colors.regularText};

    @media (max-width: 930px) {
        position: relative;
        margin: 0;
        margin-bottom: 10px;
        width: 100%;
        justify-content: center;
        gap: 10px;
        padding: 8px
    }
`;