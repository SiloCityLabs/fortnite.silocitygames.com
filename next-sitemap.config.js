/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://fortnite.silocitygames.com',
  generateRobotsTxt: true,
  outDir: './out',
};
