/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://manage-your-office.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  exclude: ['/admin', '/dashboard'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://manage-your-office.vercel.app/sitemap-0.xml', 'https://manage-your-office.vercel.app/sitemap.xml'],
  },
};
