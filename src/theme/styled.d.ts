import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            normalText: string,
            normalBackground: string,
        }
    }
}