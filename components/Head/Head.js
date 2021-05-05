import Head from 'next/head';
import { environment } from '../../environments';

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
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
            <script async defer src="/assets/js/fontawesome.min.js"></script>
            <script async defer src="/assets/js/regular.min.js"></script>
            <script async defer src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
                    integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
                    crossorigin=""></script>
            {
                process.env.NEXT_PUBLIC_ENV === 'production' ?
                <script  async
                    src={`https://www.googletagmanager.com/gtag/js?id=${environment.tagId}`}>
                </script>
                
                : null
            }

{
            process.env.NEXT_PUBLIC_ENV === 'production' ?
            <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer', '${environment.tagId}' );`}}>

                </script>
                
                : null
            }
        </Head>
    )
}

export default SeoHead;