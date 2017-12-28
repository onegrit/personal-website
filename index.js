const superstatic = require('superstatic').server;
const shrinkRay = require('shrink-ray');

const configuration = {
  port: 4242,
  config: {
    cleanUrls: true,
    headers: [
      {
        source: '**',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://anthony.codes'
          },
          {
            key: 'Cache-Control',
            value: 'max-age=604800'
          },
          {
            key: 'Content-Security-Policy',
            value: 'style-src \'self\' \'unsafe-inline\' https://cdnjs.cloudflare.com; ' +
              'script-src \'self\' \'unsafe-eval\' https://www.gstatic.com; ' +
              'font-src \'self\' data:; ' +
              'require-sri-for style'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-UA-Compatible',
            value: 'IE=edge; chrome=1'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ],
    public: './build/web',
    rewrites: [
      {
        source: '**',
        destination: '/index.html'
      }
    ]
  },
  cwd: __dirname,
  compression: shrinkRay(),
  debug: false
};

const app = superstatic(configuration);

app.listen((error) => {
  if (error) console.log(error);
});
