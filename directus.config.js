
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: "hoangvi1185@gmail.com",
        ADMIN_PASSWORD: "Abd@1289",
        KEY: "879876",
        SECRET: "abcdef12fg",

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: "containers-us-west-145.railway.app",
        DB_PORT: "5484",
        DB_DATABASE: "railway",
        DB_USER: "postgres",
        DB_PASSWORD: "CTXWtaKXw5Q1tVhXmtSE",
         DB_PASSWORD2222: "CTXWtaKXw5Q1tVhXmtSE",
    };
};
