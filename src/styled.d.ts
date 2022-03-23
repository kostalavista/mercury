export interface Palette {
  black: string;
  white: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
  }
}
