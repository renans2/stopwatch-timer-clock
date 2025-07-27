import styled from "styled-components";

export const S_ModeButton = styled.button`
    padding: 7px 20px;
    color: ${({ theme }) => theme.colors.regularText};
    background-color: ${({ theme }) => theme.colors.regularBg};
    border-radius: 20px;
    border: none;
    font-size: 2.5rem;
    font-weight: 700;
    flex: 1;

    @media (max-width: 400px) {
        padding: 3px 20px;
        border-radius: 10px;
    }
`;
