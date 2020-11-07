const { execSync, exec } = require('child_process')
console.log(execSync(__dirname + '/../node_modules/.bin/sequelize db:create').toString('utf-8'))
execSync(__dirname + '/../node_modules/.bin/sequelize db:migrate')

function setEnv(env) {
    process.env.config = JSON.stringify(env)
}

if (process.env.NODE_ENV === 'production') {
    setEnv(require('./prod'))
} else {
    setEnv(require('./dev'))
}

let ex = exec('node ' +__dirname + '/../dist/src/main.js')
ex.stdout.on('data', data => {
    console.log(data)
})
ex.stderr.on('data', data => {
    console.log(data)
})