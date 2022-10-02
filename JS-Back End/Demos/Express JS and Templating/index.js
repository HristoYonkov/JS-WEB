const express = require('express');
const fs = require('fs');
const path = require('path');
const handlebars = require('express-handlebars');
const { catsMiddleware } = require('./middlewares');

const users = [
    {name: 'Ivan', age:10},
    {name: 'Pesho', age:30},
    {name: 'Gosho', age:50}
]

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './views'); //  Changing views Folder...

app.use('/static', express.static('public')); // ADD Static Files to specific folder!!!...

app.use(catsMiddleware); // CAN be Used in single ENDPOINT!!!...

app.get('/:name?', (req, res) => {
    // res.write('Hello World!');
    // res.end();
    // res.send('Hello World!');
    res.render('home', {name:req.params.name || 'Guest',
        users: users,
        isAuth: false,
        danger: '<script>alert("you are hacked")</script>'
    });
});


app.get('/img/:imgName', (req, res) => {
    res.sendFile(path.resolve(`./public/img`, req.params.imgName));
});

app.get('/cats', (req, res) => {
    if(req.cats.length > 0 ) {
        res.send(req.cats.join(', '));
    }
    res.send('No cats here!');
});

            // Parameters Routes Validation ..........................................................
app.get('/cats/:catId(\\d+)', (req, res) => {
    let catId = Number(req.params.catId);
    res.send(cats[catId]);
});

// app.get('/cats/:catName', (req, res) => {
//     // TODO: ...
// })

app.post('/cats/:catName', (req, res) => { // This ENDPOINT must be used with POSTMAN!!!
    req.cats.push(req.params.catName);
    
    res.status(201);
    res.send(`Add cat ${req.params.catName} to the collection`)
});
            // Parameters Routes Validation ..........................................................

app.put('/cats', (req, res) => {
    // TODO: ...
    res.send('Modify existing cat');
});

// Default way to do downloads like HTTP.........
app.get('/download', (req, res) => {
    res.writeHead(200, {
        'content-type': 'application/pdf', // MIME type of files.....
        // 'content-disposition': 'attachment; fileName="sample.pdf"', // DOWNLOAD files...
        'content-disposition': 'inline' // OPEN files in Browser ....
    });

    const readStream = fs.createReadStream('sample.pdf');

    readStream.pipe(res);
    // readStream.on('data', (data) => {
    //     res.write(data);
    // });

    // readStream.on('end', () => {
    //     res.end();
    // });
});
// Default way to do downloads like HTTP.........

// Express way to download.........
app.get('/express-download', (req, res) => {
    res.download('sample.pdf'); // Terminate request...
    // res.attachment(); // Do Not terminate request...
    // res.sendFile(); // Can Execute callback and send files inline...
});
// Express way to download.........

// Classic HTTP redirect......................
app.get('/redirect', (req, res) => {
    res.writeHead(302, {
        'Location': '/cats'
    });
    res.end();
})
// Classic HTTP redirect......................

// Express Redirect...........
app.get('/express-redirect', (req, res) => {
    res.redirect('/cats');
});
// Express Redirect...........

app.get(/[0-9]+/, (req, res) => {
    res.send('Only number route')
});

app.get('/cat*', (req, res) => {
    res.send('Route starting with cat!');
});

app.all('*', (req, res) => {
    res.status(404)
    res.send('Cannot find this page!');
});


app.listen(3000, () => {
    console.log(`Server is listening on 3000`);
});