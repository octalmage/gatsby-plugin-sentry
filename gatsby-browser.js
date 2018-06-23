exports.onClientEntry = function(_, pluginParams) {
  if (process.env.NODE_ENV === 'production') {
    require.ensure(['raven-js'], function(require) {
      const Raven = require('raven-js');

      if (!Raven.isSetup()) Raven.config(pluginParams.dsn, pluginParams.config).install();
      window.Raven = Raven;
    });
  }
};
