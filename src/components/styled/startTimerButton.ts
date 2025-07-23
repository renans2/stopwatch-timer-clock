import styled from "styled-components";

export const S_StartTimerButton = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.startBtnBg};
    color: ${({ theme }) => theme.colors.startBtnText};
    border: none;
    padding: 15px 0;
    font-size: 3rem;
    font-weight: 500;
    border-radius: 30px;
    cursor: pointer;
`;