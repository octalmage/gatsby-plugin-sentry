# gatsby-plugin-sentry

Gatsby plugin to add Sentry error tracking to your site.

Learn more about Sentry [here](https://sentry.io).

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
      config: {
          // Additional config that will be passed to Raven.config
      }
    },
  },
]
```
