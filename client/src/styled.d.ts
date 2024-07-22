import "styled-components";
import { ColorPalette } from "./color";

export type ITheme = {
  colors: ColorPalette;
};

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
