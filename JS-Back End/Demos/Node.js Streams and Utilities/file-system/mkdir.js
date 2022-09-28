const fs = require('fs/promises');


fs.mkdir('./test')
    .then(() => {
        console.log('finished');
    })

console.log('first');