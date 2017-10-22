# gatsby-plugin-sentry

Gatsby plugin to add Sentry error tracking to your site.

## Install
`npm install --save gatsby-plugin-sentry`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-sentry',
    options: {
      dsn: 'YOUR_SENTRY_DSN_URL',
      // Raven.js version, this is optional.
      version: '3.19.1'
    },
  },
]
```
