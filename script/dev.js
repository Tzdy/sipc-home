module.exports = {
    port: 20004,
    baseUrl: '/dev-api',
    database: {
        username: "root",
        password: "123456",
        database: "sipc_home_development",
        host: "127.0.0.1",
        dialect: "mysql",
        logging: true
    },
    logPath: 'log',
    email: {
        from: '15001685115@163.com',
        link: 'http://localhost:8080/#/auth/reset',
        transport: {
            host: "smtp.163.com",
            secure: true,
            port: 465,
            auth: {
                user: "15001685115",
                pass: "QKRIUAMMLHGGYEGB",
            },
        }
    }
}