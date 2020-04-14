import Document, { Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            </html>
        )
    }
};