const fs = require('fs/promises');

fs.unlink('./file-system/writeText.txt')
    .then(() => {
        console.log('Delete file');
    })