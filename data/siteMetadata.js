const siteMetadata = {
  title: "Sam's Blog",
  author: 'Sam Kececi',
  headerTitle: "🌲 Sam's Blog",
  description: 'Thoughts that leave my brain...',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: '',
  siteRepo: '',
  siteLogo: '/static/images/tree 3d.png',
  image: '/static/images/tree 3d.png',
  socialBanner: '/static/images/my face.jpg',
  email: 'sam.kececi@gmail.com',
  github: 'https://github.com/skececi',
  linkedin: 'https://www.linkedin.com/in/samkececi',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: '',
  },
}

module.exports = siteMetadata
