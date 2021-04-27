module.exports = {
    siteUrl:  'https://canadacovidtracker.com',
    generateRobotsTxt: true, 
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://canadacovidtracker.com/server-sitemap.xml', // <==== Add here
      ],
    },
  }