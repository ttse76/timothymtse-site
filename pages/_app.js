import 'bootstrap/dist/css/bootstrap.min.css';
import { config } from 'config';

import 'styles/global.css';

function MyApp({ Component, pageProps }) {
  switch(config['palette']) {
    case 1:
      import('styles/palette_1.css');
      break;
    case 2:
      import('styles/palette_2.css');
    case 3:
      import('styles/palette_3.css');
  }
  return <Component {...pageProps} />
}

export default MyApp
