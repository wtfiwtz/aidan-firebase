// See https://stackoverflow.com/questions/72474803/error-the-top-level-await-experiment-is-not-enabled-set-experiments-toplevelaw
module.exports = {
    webpack: {
        configure: {
            experiments: {
                topLevelAwait: true,
            },
        },
    },
};