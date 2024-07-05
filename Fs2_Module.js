const {readFile, writeFile} = require('fs')

readFile('./Content/testing.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
   const first = result

   writeFile(

    './Content/Viewed_results.txt',
    `Resullts: ${first}`,
    (err, result) =>{
        if (err){
            console.log(err)
            return
        }
        console.log(result)
    }
   )
})