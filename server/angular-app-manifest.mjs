
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-blog/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-blog"
  },
  {
    "renderMode": 2,
    "route": "/angular-blog/content/1"
  },
  {
    "renderMode": 2,
    "route": "/angular-blog/content/2"
  },
  {
    "renderMode": 2,
    "route": "/angular-blog/content/3"
  },
  {
    "renderMode": 2,
    "route": "/angular-blog/content/4"
  },
  {
    "renderMode": 0,
    "route": "/angular-blog/content/*"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 766, hash: '9a212a6cc4bb5b423f6aa099c87729549eb8a27c270279b21b283b67141e5915', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: '269a0b2a11eb62044ad22b99cf7d2272f6f7ee3ed243b89f1039a1323993d31b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'content/1/index.html': {size: 4037, hash: '4a63bf7156aa110827d7b44c28ab5161047266dff4ea83d0f860da4c7d98e363', text: () => import('./assets-chunks/content_1_index_html.mjs').then(m => m.default)},
    'content/3/index.html': {size: 4029, hash: '347257645721a185709980d514154a36f07dd422f71479927c4105a54f32ea35', text: () => import('./assets-chunks/content_3_index_html.mjs').then(m => m.default)},
    'content/4/index.html': {size: 4074, hash: '3773702572543bf192cfeadc785481ef701d4f0fb56fd3d0bca3302bf3e73556', text: () => import('./assets-chunks/content_4_index_html.mjs').then(m => m.default)},
    'content/2/index.html': {size: 4221, hash: '6a3948144382daf9c33047463029d0c44d5458eb76e0ed2f4dedcc6e681e5950', text: () => import('./assets-chunks/content_2_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10423, hash: 'fc088b51bce3c61fad5959927b2b6095a38cb89ab2d7cf25cb31a9b2d8f786fb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZT4NP6XN.css': {size: 154, hash: 'N9+AeHfX9Tc', text: () => import('./assets-chunks/styles-ZT4NP6XN_css.mjs').then(m => m.default)}
  },
};
