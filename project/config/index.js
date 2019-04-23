const env = process.env;

const config = {
    env: env,
    workerInterval: process.env.WORKER_INTERVAL || 5,
    debug: process.env.APP__DEBUG === "yes",
    redis: process.env.REDIS_URI || 'redis://redis:6379', //'0.0.0.0:6379',
    httpPort: process.env.PORT || 8080,
};

module.exports = Object.freeze(config);