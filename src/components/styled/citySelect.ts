import styled from "styled-components";

export const S_CitySelect = styled.select`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.regularBg};
    color: ${({ theme }) => theme.colors.regularText};
    font-size: 1.5rem;
    padding: 10px;
    border: none;
    flex: 1;
    border-radius: 10px;

    &:focus {
        outline: 4px solid gray;
    }
`;