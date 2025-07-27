import styled from "styled-components";

export const S_MadeWithLove = styled.span`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${({ theme }) => theme.colors.regularText};
    font-size: 1.5rem;
    padding: 10px 0;

    a {
        color: ${({ theme }) => theme.colors.regularText}
    }
`;