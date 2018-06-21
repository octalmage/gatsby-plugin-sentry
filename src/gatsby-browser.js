import Raven    from "raven-js";

exports.onClientEntry = () => {
    if (window && process.env.NODE_ENV === "production" && window.sentry_config) {
        window.Raven = Raven;

        window.Raven.config(window.sentry_config.dsn, window.sentry_config.additional_config).install();
    }
};
