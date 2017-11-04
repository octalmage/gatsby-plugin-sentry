import React from 'react';

const SentryCdn = ({ version }) => (
  <script src={`https://cdn.ravenjs.com/${version}/raven.min.js`} crossOrigin="anonymous" />
);

SentryCdn.defaultProps = {
  version: '3.19.1',
};

const SentryInstall = ({ dsn }) => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `Raven.config('${dsn}', { environment: '${process.env.NODE_ENV}' }).install();`,
    }}
  />
);

exports.onRenderBody = ({ setHeadComponents }, { version, dsn }) => {
  return setHeadComponents([
    <SentryCdn version={version} key="gatsby-plugin-sentry-cdn" />,
    <SentryInstall dsn={dsn} key="gatsby-plugin-sentry-install" />,
  ]);
};
