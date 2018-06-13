import Raven    from "raven-js";

exports.onClientEntry = () => {
    if (window && process.env.NODE_ENV === "production") {
        window.Raven = Raven;
    }
};
