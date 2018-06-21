import Raven from "raven-js";

exports.onClientEntry = (_, pluginParams) => {
    if (window && process.env.NODE_ENV === "production" && pluginParams.dsn) {
        window.Raven = Raven;
        window.Raven.config(pluginParams.dsn, pluginParams.config || {}).install();
    }
};
