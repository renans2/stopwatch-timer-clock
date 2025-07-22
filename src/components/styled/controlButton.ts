import styled from "styled-components";

export const S_ControlButton = styled.button<{
    $variant: 'pause' | 'start' | 'reset';
}>`
    flex: 1;
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
