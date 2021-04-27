import Head from 'next/head';

const SeoHead = ({province}) => {
    return (
        <Head> 
            <title>{province} | {province} Tracker | Canada Covid Tracker</title>
            <link rel="icon" href="/assets/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta property="og:image" content="https://canadacovidtracker.com/assets/cover.jpg" />
            <meta name="robots" content="noindex" />
            <meta  name="description" content={`Most up-to-date data for ${province}. Providing you with update-to-date reults on change in cases, the overall number of cases, deaths, recovered and deaths. Please stay safe and informed.  ` } />
            <link rel="apple-touch-icon" href="/assets/favicon.ico" />
            <script async defer src="/assets/js/fontawesome.min.js"></script>
            <script async defer src="/assets/js/regular.min.js"></script>
        </Head>
    )
}

export default SeoHead;