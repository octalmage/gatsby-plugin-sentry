import React from 'react';
import PropTypes from 'prop-types';

const SentryCdn = ({ dsn, version = '3.21.0' }) =>
  dsn ? (
    <script
      src={`https://cdn.ravenjs.com/${version}/raven.min.js`}
      crossOrigin="anonymous"
    />
  ) : null;

SentryCdn.propTypes = {
  // Sentry public DSN.
  // (obtained from https://docs.sentry.io/clients/javascript/#configuring-the-client)
  //
  // If omitted, Raven.js will be excluded from the build, and Sentry will be disabled.
  dsn: PropTypes.string,
  // The version of Raven.js to load.
  version: PropTypes.string,
};

SentryCdn.defaultProps = {
  dsn: null,
  version: '3.21.0',
};

const SentryInstall = ({ dsn, config = {} }) => {
  return dsn ? (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `Raven.config('${dsn}', ${JSON.stringify(config)}).install();`,
      }}
    />
  ) : null;
};

SentryInstall.propTypes = {
  // Sentry public DSN.
  // (obtained from https://docs.sentry.io/clients/javascript/#configuring-the-client)
  //
  // If omitted, Raven.js will be excluded from the build, and Sentry will be disabled.
  dsn: PropTypes.string,
  // The Raven.js configuration object.
  // See: https://docs.sentry.io/clients/javascript/config/.
  config: PropTypes.object,
};

SentryCdn.defaultProps = {
  dsn: null,
  config: {},
};

exports.onRenderBody = ({ setHeadComponents }, { version, dsn, config }) => {
  return setHeadComponents([
    <SentryCdn dsn={dsn} version={version} key="gatsby-plugin-sentry-cdn" />,
    <SentryInstall
      dsn={dsn}
      config={config}
      key="gatsby-plugin-sentry-install"
    />,
  ]);
};
