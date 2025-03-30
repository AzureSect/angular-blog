
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://azuresect.github.io/angular-blog/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-blog"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 791, hash: 'afed3eec6eebd8d5ca6c341e46fc1c9ba1e24518a9fe68534daffea18bcd420a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1048, hash: 'ba41ec80eee81e6bde92eb8122286afe46453c72ca71c04708e693070240e2f4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12135, hash: '51b23870bf437a6c4cd63425560dd275cafed369c2a4a68063b8b76e05178937', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZT4NP6XN.css': {size: 154, hash: 'N9+AeHfX9Tc', text: () => import('./assets-chunks/styles-ZT4NP6XN_css.mjs').then(m => m.default)}
  },
};
