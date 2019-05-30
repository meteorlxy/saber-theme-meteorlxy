module.exports = {
  siteConfig: {
    title: 'saber-theme-meteorlxy',

    description: 'Saber theme of meteorlxy\'s blog',
  },

  theme: '../lib',

  themeConfig: {
    lang: 'en-US',

    personalInfo: {
      nickname: 'meteorlxy',
      description: 'Happy Coding<br/>Happy Life',
      email: 'meteor.lxy@foxmail.com',
      location: 'Xi\'an City, China',
      organization: 'Xi\'an Jiao Tong University',

      avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',

      sns: {
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/meteorlxy',
        },
        facebook: {
          account: 'meteorlxy.cn',
          link: 'https://www.facebook.com/meteorlxy.cn',
        },
        linkedin: {
          account: 'meteorlxy',
          link: 'http://www.linkedin.com/in/meteorlxy',
        },
        twitter: {
          account: 'meteorlxy_cn',
          link: 'https://twitter.com/meteorlxy_cn',
        },
        weibo: {
          account: '@焦炭君_Meteor',
          link: 'https://weibo.com/u/2039655434',
        },
        zhihu: {
          account: 'meteorlxy.cn',
          link: 'https://www.zhihu.com/people/meteorlxy.cn',
        },
        douban: {
          account: '159342708',
          link: 'https://www.douban.com/people/159342708',
        },
        reddit: {
          account: 'meteorlxy',
          link: 'https://www.reddit.com/user/meteorlxy',
        },
        medium: {
          account: 'meteorlxy.cn',
          link: 'https://medium.com/@meteorlxy.cn',
        },
        instagram: {
          account: 'meteorlxy.cn',
          link: 'https://www.instagram.com/meteorlxy.cn',
        },
        gitlab: {
          account: 'meteorlxy',
          link: 'https://gitlab.com/meteorlxy',
        },
        bitbucket: {
          account: 'meteorlxy',
          link: 'https://bitbucket.org/meteorlxy',
        },
        docker: {
          account: 'meteorlxy',
          link: 'https://hub.docker.com/u/meteorlxy',
        },
      },
    },

    header: {
      background: {
        // url: '/assets/img/bg.jpg',
        useGeo: true,
      },
      showTitle: true,
    },

    lastUpdated: true,

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Custom Pages', link: '/custom-pages/', exact: false },
      { text: 'Changelog', link: 'https://github.com/meteorlxy/saber-theme-meteorlxy/blob/master/CHANGELOG.md' },
      { text: 'Github', link: 'https://github.com/meteorlxy/saber-theme-meteorlxy' },
    ],

    comments: {
      owner: 'meteorlxy',
      repo: 'saber-theme-meteorlxy',
      clientId: '',
      clientSecret: '',
      autoCreateIssue: false,
    },

    pagination: {
      perPage: 5,
    },
  },
}
