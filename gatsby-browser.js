exports.onClientEntry = function(_, pluginParams) {
  import('@sentry/browser').then((Sentry) => {
    Sentry.init(pluginParams);
    window.Sentry = Sentry;
  });
};
