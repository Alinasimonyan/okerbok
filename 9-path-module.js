const path = require('path')
const findPath = path.join('/content', 'subcontent', 'test.txt')

console.log(findPath)



//console.log(path.basename(findPath))


const absolute = path.resolve(__dirname, '/content', 'subcontent', 'test.txt')

console.log(absolute)