import styled from "styled-components";

export const S_ModeButton = styled.button`
    padding: 7px 40px;
    color: ${({ theme }) => theme.colors.regularText};
    background-color: ${({ theme }) => theme.colors.regularBg};
    border-radius: 20px;
    border: none;
    font-size: 3rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.regularBgHover};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.regularTextDisabled};
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors.regularBgDisabled};
    }
`;
