const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Laís'
data.age = 27

const dataStr = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataStr)

// console.log(dataStr.age)