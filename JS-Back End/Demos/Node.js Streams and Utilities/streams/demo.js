const fs = require('fs');
const zlib = require('zlib');


const readStream = fs.createReadStream('./streams/largeFile.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./streams/coppyFile.txt', {encoding: 'utf-8'});

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
//     console.log(chunk);
//     console.log('----------------------------------------------------------------------------------------');
// });

// readStream.on('end', () => {
//     writeStream.end();
//     console.log('Finished');
// });

writeStream.on('finish', () => console.log('File is saved!'));

const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);