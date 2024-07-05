const {readFileSync, writeFileSync}= require('fs')


const first= readFileSync('./Content/Subfolder/test.txt','utf8')
console.log(first)

writeFileSync(
    './Content/Subfolder/result-sync.txt',
    `Here is the Result: ${first}`
)
