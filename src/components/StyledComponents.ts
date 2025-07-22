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
    background-color: ${({ theme }) => theme.colors.appBg};
    height: 100%;
    width: 100%;
    max-width: 1000px;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const ModesStyled = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
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
    background-color: ${({ theme }) => theme.colors.timerSelectorBtn};
    color: white;
    border: none;

    &:disabled {
        background-color: ${({ theme }) => theme.colors.timerSelectorBtnDisabled};
    }
`;

export const ModeButtonStyled = styled.button`
    padding: 7px 40px;
    color: ${({ theme }) => theme.colors.regularText};
    background-color: ${({ theme }) => theme.colors.regularBg};
    border-radius: 20px;
    border: none;
    font-size: 3rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme }) => theme.colors.regularBgHover};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.regularTextDisabled};
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors.regularBgDisabled};
    }
`;

export const ControlButtonStyled = styled.button<{
    $variant: 'pause' | 'start' | 'reset';
}>`
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
        color: ${({ theme }) => theme.colors.regularTextDisabled};
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.colors.regularBgDisabled};
    }

    background-color: ${({ $variant, theme }) => {
        switch ($variant) {
            case 'pause':
                return theme.colors.pauseBtnBg;
                
            case 'start':
                return theme.colors.startBtnBg;

            case 'reset':
                return theme.colors.resetBtnBg;
        
            default:
                break;
        }
    }};

    color: ${({ $variant, theme }) => {
        switch ($variant) {
            case 'pause':
                return theme.colors.pauseBtnText;
                
            case 'start':
                return theme.colors.startBtnText;

            case 'reset':
                return theme.colors.resetBtnText;
        
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
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 8rem;
    font-weight: 500;
    border-radius: 49px;
    padding: 0px 75px;
    color: ${({ theme }) => theme.colors.regularText};
    background-color: ${({ theme }) => theme.colors.regularBg};

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
