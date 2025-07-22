import styled from "styled-components";

export const S_ModeButton = styled.button`
    padding: 7px 40px;
    color: ${({ theme }) => theme.colors.regularText};
    background-color: ${({ theme }) => theme.colors.regularBg};
    border-radius: 20px;
    border: none;
    font-size: 2.5rem;
    font-weight: 700;
    cursor: pointer;
    flex: 1;

    &:hover {
        opacity: 0.75;
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.regularTextDisabled};
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors.regularBgDisabled};
    }
`;
