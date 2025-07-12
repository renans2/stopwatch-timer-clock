import styled from "styled-components";

export const Container = styled.div`
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: red;
    text-align: center;
`;

export const AppStyled = styled.div`
    padding: 20px;
    background-color: #000000;
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ModesStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    margin-bottom: 70px;
`;

export const TimerSelectorButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;
`;

export const TimerSelectorButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 8rem;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    background-color: #FF690C;
    color: white;
    border: none;

    &:disabled {
        background-color: #8a3b0aff
    }
`;

export const ModeButtonStyled = styled.button`
    padding: 7px 40px;
    color: #C2C2C2;
    background-color: #151515;
    border-radius: 20px;
    border: none;
    font-size: 3rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: #1f1f1fff
    }

    &:disabled {
        color: #353535;
        cursor: not-allowed;
        background-color: #090909;
    }
`;

interface ControlButtonProps {
    $variant: 'pause' | 'start' | 'reset';
}

export const ControlButtonStyled = styled.button<ControlButtonProps>`
    padding: 7px 20px;
    border-radius: 20px;
    border: none;
    font-size: 3rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        opacity: 0.75;
    }

    &:disabled {
        color: #353535;
        cursor: not-allowed;
        background-color: #090909;
    }

    background-color: ${({ $variant }) => {
        switch ($variant) {
            case 'pause':
                return '#0F0E07';
                
            case 'start':
                return '#070F07';

            case 'reset':
                return '#0F0707';
        
            default:
                break;
        }
    }};

    color: ${({ $variant }) => {
        switch ($variant) {
            case 'pause':
                return '#FFE97B';
                
            case 'start':
                return '#7BFF7F';

            case 'reset':
                return '#FF7B7B';
        
            default:
                break;
        }
    }};
`;

export const ControlButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const DisplayStyled = styled.span`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 8rem;
    font-weight: 500;
    border-radius: 49px;
    padding: 0px 75px;
    color: #C2C2C2;
    background-color: #151515;

    /* box-shadow: inset 2px 2px 10px hsl(0, 0, 100, 10); */
`;

export const TimerInputContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: green;
    text-align: center;
`;

export const ControlButtonsStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: pink;
    text-align: center;
`;
