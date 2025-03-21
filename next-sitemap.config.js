/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://manage-your-office.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: true,
  exclude: ['/admin', '/dashboard'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    additionalSitemaps: ['https://manage-your-office.vercel.app/sitemap.xml'],
  },
};
