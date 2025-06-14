/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://fortnite.silocitygames.com',
  generateRobotsTxt: true,
  outDir: './out',
};
