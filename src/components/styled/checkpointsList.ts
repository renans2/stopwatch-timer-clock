import styled from "styled-components";

export const S_CheckpointsList = styled.ul`
    width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* padding: 0px 30px; */
    background-color: ${({ theme }) => theme.colors.regularBg};
    padding: 20px;
    border-radius: 20px;
`;