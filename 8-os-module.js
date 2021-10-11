const os = require('os')

const user = os.userInfo()
console.log(user)

console.log(`Let find out what ${os.uptime()} is`)

const life = {
    x: os.type(),
    y: os.version(),
    z:os.uptime(),
    a: os.totalmem(),
}

console.log(life)