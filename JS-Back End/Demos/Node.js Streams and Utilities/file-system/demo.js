const fs = require('fs');

// const text = fs.readFileSync('./file-system/text.txt', {encoding: 'utf-8'}); SYNC VARIANT!
// console.log(text);

fs.readFile('./file-system/text.txt', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});

console.log('end');