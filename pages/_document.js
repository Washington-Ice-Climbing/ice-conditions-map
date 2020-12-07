import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
            <Head>
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
                    rel="stylesheet"
                />
                <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.png" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </Html>
        )
    }
};