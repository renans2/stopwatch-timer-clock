import styled from "styled-components";

export const S_ModeContainer = styled.div<{ $show: boolean }>`
    height: 100%;
    width: 100%;
    display: ${({ $show }) => $show ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;