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

  const palette = <style jsx global>{`:root {
    --color-main: ${selectedPalette.colorMain};
    --color-main-hover: ${selectedPalette.colorMainHover};
    --color-bg: ${selectedPalette.colorBg};
    --color-text: ${selectedPalette.colorText};
    --font-display: ${selectedPalette.fontDisplay};
    --font-text: ${selectedPalette.fontText};
  }`}</style>;

  return {
    colorPalette: palette,
    fontUrl: selectedPalette.fontUrl
  };
}

const palette1 = {
  colorMain: '#41ebf9',
  colorMainHover: '#ddfcff',
  colorText: 'white',
  colorBg: '#010031',
  fontDisplay: "'Poppins', sans-serif",
  fontText: "'Roboto', sans-serif",
  fontUrl: "https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap"
};