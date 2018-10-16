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
      // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
      config: {
        environment: process.env.NODE_ENV,
        // if shouldSendCallback returns false, sentry won't log error, https://docs.sentry.io/clients/javascript/config/#shouldSendCallback
        shouldSendCallback: () => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1
      }
    },
  },
]
```
