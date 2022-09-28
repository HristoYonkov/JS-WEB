const fs = require('fs');

fs.readdir('./file-system', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
});
