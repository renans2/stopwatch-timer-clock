import styled from "styled-components";

export const S_Display = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(2rem, 20vw, 8rem);
    font-weight: 500;
    border-radius: clamp(20px, 7vw, 40px);
    padding: 0px 20px;
    color: ${({ theme }) => theme.colors.regularText};
    background-color: ${({ theme }) => theme.colors.regularBg};
`;
