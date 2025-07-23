import styled from "styled-components";

export const S_MarkCheckpointButton = styled.button`
    width: 100%;
    color: white;
    font-size: 2rem;

    border-radius: 20px;
    border: none;
    padding: 15px;
    font-weight: bold;

    background-color: ${({ theme }) => theme.colors.markCheckpointBtnBg};
    color: ${({ theme }) => theme.colors.markCheckpointBtnText};
`;