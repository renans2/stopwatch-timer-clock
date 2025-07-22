import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            appBg: string,
            timerSelectorBtn: string,
            timerSelectorBtnDisabled: string,
            regularText: string,
            regularTextDisabled: string,
            regularBg: string,
            regularBgHover: string,
            regularBgDisabled: string,
            pauseBtnBg: string,
            pauseBtnText: string,
            pauseBtnBgDisabled: string,
            pauseBtnTextDisabled: string,
            startBtnBg: string,
            startBtnText: string,
            startBtnBgDisabled: string,
            startBtnTextDisabled: string,
            resetBtnBg: string,
            resetBtnText: string,
            resetBtnBgDisabled: string,
            resetBtnTextDisabled: string,
        }
    }
}