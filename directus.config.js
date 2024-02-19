
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: "hoangvi1185@gmail.com",
        ADMIN_PASSWORD: "Abd@1289",
        KEY: "12341234",
        SECRET: "fasdfasdfas",

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'pg',
        DB_HOST: "monorail.proxy.rlwy.net",
        DB_PORT: "35529",
        DB_DATABASE: "railway",
        DB_USER: "postgres",
        DB_PASSWORD: "AAd2g42B3EGC4aDgBegga2a34fB3d614",
         DB_PASSWORD2222: "AAd2g42B3EGC4aDgBegga2a34fB3d614",
    };
};
