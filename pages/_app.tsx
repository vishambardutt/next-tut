import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header  from  '../Components/Header'
import Footer from '../Components/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return 
  <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
