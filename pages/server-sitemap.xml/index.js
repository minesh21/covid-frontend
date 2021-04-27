import { getServerSideSitemap } from 'next-sitemap'
import { Constants } from '../../constants';

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

    const fields = [
        {
            loc: 'https://canadacovidtracker.com', // Absolute url
            lastmod: new Date().toISOString(),
        }, 
        {
            loc: 'https://canadacovidtracker.com/ab', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/bc', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/nb', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/nl', // Absolute url
            lastmod: new Date().toISOString(),
        }, {
            loc: 'https://canadacovidtracker.com/ns', // Absolute url
            lastmod: new Date().toISOString(),
        }, 
        {
            loc: 'https://canadacovidtracker.com/nt', // Absolute url
            lastmod: new Date().toISOString(),
        }, 
        {
            loc: 'https://canadacovidtracker.com/nu', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/mb', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/on', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/pe', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/rp', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/sk', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/qc', // Absolute url
            lastmod: new Date().toISOString(),
        },
        {
            loc: 'https://canadacovidtracker.com/yu', // Absolute url
            lastmod: new Date().toISOString(),
        }
    ]

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}