
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
    'index.csr.html': {size: 767, hash: 'af7f4711a6c791daa7b83ce97b20b5ba705ef14e5d198fa56f7157800f086526', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: 'e8a47305b0b551dc52c01e11c8521b34512e7bd00da5309b0dc5b336744ce1b1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'content/1/index.html': {size: 4038, hash: '4d830fcc2ddc9c5582e0c808b34b94a448fb8107584ebd12119b0090fb570af6', text: () => import('./assets-chunks/content_1_index_html.mjs').then(m => m.default)},
    'content/3/index.html': {size: 4030, hash: '53e4c341c1c27cfdc8deb87728779e6d8b1243bbb0dc3a3b0cd7328c10ec9ce4', text: () => import('./assets-chunks/content_3_index_html.mjs').then(m => m.default)},
    'content/4/index.html': {size: 4075, hash: 'c035c3bcc5fc3c6ec305d0f1d255bbba1ab018cba1d495f3cf694f456b534890', text: () => import('./assets-chunks/content_4_index_html.mjs').then(m => m.default)},
    'content/2/index.html': {size: 4222, hash: 'f7672f1aae5b0b0b4f6c92605d581cd227127e22692cf0f92ef3287ec830f84c', text: () => import('./assets-chunks/content_2_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10424, hash: 'b96a567dec3dadef9ed765a011b044f37e4c001a9f52ce01ac9be6d2ea2e31f4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZT4NP6XN.css': {size: 154, hash: 'N9+AeHfX9Tc', text: () => import('./assets-chunks/styles-ZT4NP6XN_css.mjs').then(m => m.default)}
  },
};
