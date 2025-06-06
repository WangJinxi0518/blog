export const SITE_METADATA = {
  title: `Jinxi's dev blog – stories, insights, and ideas`,
  author: 'Jinxi',
  headerTitle: `Jinxi's dev blog`,
  description:
      '这算是我在网络上的一个小角落吧，主要就是用来记下我学编程、写代码的一些经历。我会把我踩过的坑、学到的经验、一点儿小想法，还有找到的一些好资源，都在这里分享出来，希望能帮助到其他的开发者朋友们。',
  language: 'zh-CN',
  theme: 'system',  // system, dark or light
  siteUrl: 'https://www.wangjinxi0518.dev',
  siteRepo: 'https://github.com/WangJinxi0518',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/1.jpg`,
  socialBanner:
      `${process.env.BASE_PATH || ''}/static/images/twitter-card.jpeg`,
  email: 'wangjinxi@csu.edu.cn',
  github: 'https://github.com/WangJinxi0518',
  x: 'https://x.com/virulent_2',
  facebook: 'https://facebook.com/hta218',
  youtube: 'https://www.youtube.com/@wjx-v6y',
  linkedin: 'https://www.linkedin.com/in/hta218',
  threads: 'https://www.threads.net/hta218_',
  instagram: 'https://www.instagram.com/hta218_',
  locale: 'zh-CN',
  stickyNav: true,
  goodreadsBookshelfUrl:
      'https://www.goodreads.com/review/list/179720035-leo-huynh',
  goodreadsFeedUrl: 'https://www.goodreads.com/review/list_rss/179720035',
  imdbRatingsList: 'https://www.imdb.com/user/ur154483197/ratings/?view=grid',
  analytics: {
    umamiAnalytics: {
      websiteId: process.env.NEXT_UMAMI_ID,
      shareUrl:
          'https://analytics.wangjinxi.me/share/XrO8zMwNUCNuzIxf/wangjinxi.me',
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus,
    // beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title',  // supported options: pathname, url, title
      reactions: '1',    // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    kbarConfigs: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/leohuynh.dev',
    paypal: 'https://paypal.me/hta218?country.x=VN&locale.x=en_US',
    kofi: 'https://ko-fi.com/hta218',
  },
}
