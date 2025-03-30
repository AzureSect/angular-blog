
export default {
  basePath: 'https://azuresect.github.io/angular-blog',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
