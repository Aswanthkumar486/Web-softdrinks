// pages/_app.js
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional but recommended
import '@/styles/globals.css'; // Your global styles (optional)
import "react-multi-carousel/lib/styles.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Load Bootstrap JS bundle (includes Popper)
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return <Component {...pageProps} />;
}