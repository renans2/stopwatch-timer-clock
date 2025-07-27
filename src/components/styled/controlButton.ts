import styled from "styled-components";

export const S_ControlButton = styled.button<{ $variant: 'pause' | 'start' | 'reset'; }>`
    flex: 1;
    padding: 7px 0;
    border-radius: clamp(10px, 5vw, 30px);
    border: none;
    font-size: clamp(2rem, 10vw, 4rem);
    font-weight: 500;

    background-color: ${({ $variant, theme }) => {
        switch ($variant) {
            case 'pause': return theme.colors.pauseBtnBg;
            case 'start': return theme.colors.startBtnBg;
            case 'reset': return theme.colors.resetBtnBg;
            default: break;
        }
    }};

    color: ${({ $variant, theme }) => {
        switch ($variant) {
            case 'pause': return theme.colors.pauseBtnText;
            case 'start': return theme.colors.startBtnText;
            case 'reset': return theme.colors.resetBtnText;
            default: break;
        }
    }};
`;
