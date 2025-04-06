
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 751, hash: '27bf56717c0fa3dbb824b7e47c82f971f3a5cfa1d9a8fb78b5e0899c8b395d69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '99e745e7cd529c1d3341cc796abc2767c2c5413824d9b37469da2977b2761185', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9340, hash: '88d3e85f17634e2e63b4e9b24d09a8e4b686ea60f5ef4a6948baa6d9666e3d64', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZT4NP6XN.css': {size: 154, hash: 'N9+AeHfX9Tc', text: () => import('./assets-chunks/styles-ZT4NP6XN_css.mjs').then(m => m.default)}
  },
};
