import "../styles/globals.css";
import PTAppBar from "./Components/AppBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PTAppBar/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
