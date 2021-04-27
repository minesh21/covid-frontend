const environments = {
    local : {
        cdnServerUrl: 'http://localhost:3000',
        baseServerUrl: 'http://localhost:8080/api/v1'
    },
    production: {
        cdnServerUrl: 'https://canadacovidtracker.com',
        baseServerUrl: 'https://api.canadacovidtracker.com/api/v1',
    }
}

let env = process.env.NEXT_PUBLIC_ENV;

// if (!env) env = 'local';

export const environment = environments[env];