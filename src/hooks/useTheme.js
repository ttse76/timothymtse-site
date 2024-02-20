import { useState } from "react";

const currentPalette = 1;

const getCurrentPalette = () => {
  switch(currentPalette) {
    case 1:
    default:
      return palette1;
  }
};

export function useTheme() {
  const selectedPalette = getCurrentPalette();
  
  /*const [useDarkMode, setUseDarkMode] = useState(typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : true);*/

  const useDarkMode = true;

  const getColorType = (colorName) => {
    const name = `${colorName}${useDarkMode ? 'Dark' : 'Light'}`;
    return selectedPalette[name];
  };

  const palette = <style jsx global>{`:root {
    --color-main: ${getColorType('colorMain')};
    --color-main-hover: ${getColorType('colorMainHover')};
    --color-bg: ${getColorType('colorBg')};
    --color-text: ${getColorType('colorText')};
    --font-display: ${selectedPalette.fontDisplay};
    --font-text: ${selectedPalette.fontText};
  }`}</style>;

  return {
    colorPalette: palette,
    fontUrl: selectedPalette.fontUrl
  };
}

const palette1 = {
  colorMainDark: '#01ca62',
  colorMainLight: '#01ca62',
  colorMainHoverDark: '#58fca8',
  colorMainHoverLight: '#58fca8',
  colorTextDark: '#bababa',
  colorTextLight: 'black',
  colorBgDark: '#002D62',
  colorBgLight: '#FFF5E5',
  fontDisplay: "'Kode Mono', monospace",
  fontText: "'Inconsolata', monospace",
  fontUrl: "https://fonts.googleapis.com/css2?family=Kode+Mono:wght@200..900&family=Inconsolata:wght@600&display=swap"
};