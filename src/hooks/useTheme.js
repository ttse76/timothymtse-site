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
  
  const [useDarkMode, setUseDarkMode] = useState(typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : true);

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
  colorMainDark: '#0BD3E5',
  colorMainLight: '#010031',
  colorMainHoverDark: '#ddfcff',
  colorMainHoverLight: '#009088',
  colorTextDark: '#bababa',
  colorTextLight: 'black',
  colorBgDark: '#292929',
  colorBgLight: '#FFF5E5',
  fontDisplay: "'Poppins', sans-serif",
  fontText: "'Roboto', sans-serif",
  fontUrl: "https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
};