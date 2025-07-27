import styled from "styled-components";

export const S_TimerSelectorContainer = styled.div<{ $show: boolean }>`
    width: 100%;
    display: ${({ $show }) => $show ? 'flex' : 'none'};
    flex-direction: column;
    gap: 20px;
`;