require('dotenv').config();

const config = {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
    AUTH0_KEYWORD_REPLACE_MAPPINGS: { AUTH0_TENANT_NAME: process.env.AUTH0_TENANT_NAME},
    AUTH0_ALLOW_DELETE: false,
    AUTH0_EXCLUDED_RULES: ['rule-1-name'],
};

export default config;
