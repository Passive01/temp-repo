const {readFile, writeFile} = require ('fs');

console.log('start');
readFile('./content/first.txt','utf8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = data;

    readFile('./content/second.txt','utf8', (err, data)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = data;
        
        writeFile('./content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            {flag: 'a'},
            (err,data)=>{
                if (err){
                    console.log(err);
                    return;
                }
                console.log('Done with this task');
            }
        )
    })
})
console.log('Starting next task');
