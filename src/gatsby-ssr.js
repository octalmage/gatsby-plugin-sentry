import React from 'react';
import PropTypes from 'prop-types';

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

exports.onRenderBody = ({ setHeadComponents }, { version, dsn, config }) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <SentryInstall
        dsn={dsn}
        config={config}
        key="gatsby-plugin-sentry-install"
      />,
    ]);
  }
  
  return null;
};
