import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            appBg: string,
            timerSelectorBtn: string,
            regularText: string,
            regularBg: string,
            regularBgHover: string,
            pauseBtnBg: string,
            pauseBtnText: string,
            startBtnBg: string,
            startBtnText: string,
            resetBtnBg: string,
            resetBtnText: string,
            markCheckpointBtnBg: string,
            markCheckpointBtnText: string,
        }
    }
}