import "../styles/globals.css";
import "../styles/app.css";
import "../styles/base.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <Head>
                <script src="/scripts/main.js" type="text/javascript"></script>
            </Head> */}
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
