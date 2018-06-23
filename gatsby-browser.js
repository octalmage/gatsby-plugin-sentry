exports.onClientEntry = (_, pluginParams) => {
    require.ensure(['raven-js'], require => {
        const Raven = require('raven-js');

        if (!Raven.isSetup()) Raven.config(pluginParams.dsn, pluginParams.config).install();
        window.Raven = Raven;
    });
};
