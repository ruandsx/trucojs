import { DefaultColors } from "@/color";
import { ITheme } from "@/styled";
import { createGlobalStyle } from "styled-components";

const defaultColors: DefaultColors = {
  neutral: {
    "100": "#ffffff",
    "200": "#cccccc",
    "300": "#908d90",
    "400": "#9B9E9D",
    "500": "#4E4F4F",
    "600": "#1f1f1f",
    "700": "#000000",
  },
  positive: {
    "100": "#B6C63B",
    "200": "#4FB166",
    "300": "#789441",
  },
  negative: {
    "100": "#F13833",
    "200": "#F0734F",
    "300": "#EB6064",
  },
};

export const lightTheme: ITheme = {
  colors: {
    text: "#000000",
    background: "#B9D348",
    primary: "#ffffff",
    secondary: "#67BF66",
    tertiary: "#00A47E",
    accent: "#2F4858",
    ...defaultColors,
  },
};

export const darkTheme: ITheme = {
  colors: {
    text: "#ffffff",
    background: "#092635",
    primary: "#1B4242",
    secondary: "#5C8374",
    tertiary: "#9EC8B9",
    accent: "#ffffff",
    ...defaultColors,
  },
};

export const GlobalStyles = createGlobalStyle`
  :root, body {
    margin: 0 auto;

    background: ${({ theme }) => theme.colors.background};

    color: ${({ theme }) => theme.colors.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    
    transition: all 0.50s linear;
  }

  p, span {
    color: ${({ theme }) => theme.colors.text};
  }

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 4px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
    cursor: pointer;
  }
`;
