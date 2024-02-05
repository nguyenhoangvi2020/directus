
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
        DB_HOST: "monorail.proxy.rlwy.net",
        DB_PORT: "20836",
        DB_DATABASE: "railway",
        DB_USER: "postgres",
        DB_PASSWORD: "e1eB4CDBAC145FdgAagDdagfFegacaF2",
         DB_PASSWORD2222: "e1eB4CDBAC145FdgAagDdagfFegacaF2",
    };
};
