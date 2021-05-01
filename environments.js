const environments = {
    local : {
        env: 'local',
        cdnServerUrl: 'http://localhost:3000',
        baseServerUrl: 'http://localhost:8080/api/v1',
        tagId: ''
    },
    production: {
        env: 'prod',
        cdnServerUrl: 'https://canadacovidtracker.com',
        baseServerUrl: 'https://api.canadacovidtracker.com/api/v1',
        tagId: 'G-94QR6QF10C'
    }
}

let env = process.env.NEXT_PUBLIC_ENV;

// if (!env) env = 'local';

export const environment = environments[env];