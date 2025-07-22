import styled from "styled-components";

export const S_Checkpoint = styled.li`
    color: ${({ theme }) => theme.colors.regularText};
    display: flex;
    justify-content: space-between;
    width: 100%;
    list-style: none;
    font-size: 2rem;
    font-weight: 500;
    border-bottom: 2px dotted ${({ theme }) => theme.colors.regularText};
`;