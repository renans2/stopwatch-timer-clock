import styled from "styled-components";

export const S_TimerSelectorButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.timerSelectorBtn};
    color: white;
    border: none;
`;
