import styled from "styled-components";

export const S_CityLabel = styled.label`
    color: ${({ theme }) => theme.colors.regularText};
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        font-size: 2rem;
    }
`;