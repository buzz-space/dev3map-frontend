import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="/fonts/fonts.css" rel="stylesheet" type="text/css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}