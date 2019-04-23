function wrap (symbol, array) {
    return [`[${ symbol }]`, new Date().toLocaleString(), "|"].concat(array);
}

function logInfo (...args) {
    console.info.apply(console, wrap("INFO", args));
}

function logDebug (...args) {
    console.info.apply(console, wrap("DEBUG", args));
}

function logError (...args) {
    console.error.apply(console, wrap("ERR", args));
}

module.exports = {
    logError,
    logInfo,
    logDebug
};