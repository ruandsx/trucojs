type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export declare type Color = RGB | RGBA | HEX;

export declare type SemanticScale = {
  100: Color;
  200: Color;
  300: Color;
};

export declare type NeutralScale = SemanticScale & {
  400: Color;
  500: Color;
  600: Color;
  700: Color;
};

export declare type ThemeColors = {
  text: Color;
  background: Color;
  primary: Color;
  secondary: Color;
  tertiary: Color;
  accent: Color;
};

export declare type DefaultColors = {
  neutral: NeutralScale;
  positive: SemanticScale;
  negative: SemanticScale;
};

export declare type ColorPalette = ThemeColors & DefaultColors;
