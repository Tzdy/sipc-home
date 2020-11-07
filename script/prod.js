module.exports =  {
    port: 20004,
    baseUrl: '/prod-api',
    database: {
        username: "root",
        password: "aq20006jp",
        database: "sipc_home",
        host: "127.0.0.1",
        dialect: "mysql",
        logging: false
    },
    logPath: 'log',
    email: {
        from: '15001685115@163.com',
        link: '',
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