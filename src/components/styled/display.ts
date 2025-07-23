import styled from "styled-components";

export const S_Display = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    font-weight: 500;
    border-radius: 49px;
    padding: 0px 75px;
    color: ${({ theme }) => theme.colors.regularText};
    background-color: ${({ theme }) => theme.colors.regularBg};
`;
