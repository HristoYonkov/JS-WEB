const fs = require('fs/promises');

const data = 'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.'

fs.writeFile('./file-system/writeText.txt', data, {encoding: 'utf-8'})
    .then(() => {
        console.log('finished');
    })
    .catch((err) => {
        console.log('error');
    })