import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../redux/store';

function Suscripty({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>
  );
}

export default Suscripty