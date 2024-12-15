
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/nishko/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/nishko"
  }
],
  assets: {
    'index.csr.html': {size: 501, hash: 'd64288af26e96e82388dfdcfd1a50dfc38da9d376fc1fcc335bc3ad4369acd74', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: '8f8b1ca8315b0e9bb2ac3b514a01c4f2b8394fbf29209a532d6f8c8ef46942d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20928, hash: 'f2129fffa7e466ef59ffa5113839240de3324de4733d42614cf6adaa995513d4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
