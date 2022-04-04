import "../styles/globals.css";
import "../styles/app.css";
import "../styles/base.css";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
