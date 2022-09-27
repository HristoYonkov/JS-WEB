const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
    // console.log('Method: ', req.method);
    // console.log('Url: ', req.url);
    // console.log('Headers: ', req.headers);
    res.writeHead(200, {
        'content-type': 'text/html'
    })

    if (req.url === '/content/styles/site.css') {
        res.writeHead(200, {
            'content-type': 'text/css'
        })
        const siteCss = await fs.readFile('./content/styles/site.css', 'utf-8');
        res.write(siteCss)
    }

    if (req.url === '/') {
        const homeView = await fs.readFile('./views/home.html', 'utf-8');
        let data = await fs.readFile('./content/cats.json');

        let cats = JSON.parse(data);
        const homeTemplate = homeView.replace('{{cats}}', cats.map(catTemplate).join(''))
        res.write(homeTemplate)
    }

    if (req.url === '/cats/add-breed') {
        const addBreed = await fs.readFile('./views/addBreed.html', { encoding: 'utf-8' });
        res.write(addBreed);
    }
    if (req.url.startsWith('/addBreed')) {
        const newUrl = req.url.split('?')[1].split('=')[1];

        const data = await fs.readFile('./content/breed.json', 'utf-8');
        const newData = JSON.parse(data);
        newData.push({ breed: newUrl });

        await fs.writeFile('./content/breed.json', JSON.stringify(newData), 'utf-8');
        const addBreed = await fs.readFile('./views/addBreed.html', { encoding: 'utf-8' });
        res.write(addBreed);
    }

    if (req.url === '/cats/add-cat') {
        let addCat = await fs.readFile('./views/addCat.html', { encoding: 'utf-8' });
        const data = await fs.readFile('./content/breed.json', 'utf-8');
        let catsTemplate = '';
        const cats = JSON.parse(data).forEach(el => {
            catsTemplate += `<option value="${el.breed}">${el.breed}</option>\n`;
        });
        addCat = addCat.replace('{{breed}}', catsTemplate);

        res.write(addCat);
    }

    if (req.url.startsWith('/addCat')) {
        const url = new URL(req.url, `http://5000/${req.url}`);
        const newCat = Object.fromEntries(url.searchParams);
        const readDataCats = await fs.readFile('./content/cats.json', 'utf-8');
        const newDataCats = JSON.parse(readDataCats);
        newDataCats.push(newCat);
        await fs.writeFile('./content/cats.json', JSON.stringify(newDataCats), 'utf-8');
        
        let addCat = await fs.readFile('./views/addCat.html', { encoding: 'utf-8' });
        res.write(addCat);
    }

    if (req.url.startsWith('/search')) {
        const newUrl = req.url.split('?')[1].split('=')[1];

        const homeView = await fs.readFile('./views/home.html', 'utf-8');
        const data = await fs.readFile('./content/cats.json');
        const cats = JSON.parse(data).filter(n => n.name.toLowerCase().includes(newUrl.toLowerCase()));

        const homeTemplate = homeView.replace('{{cats}}', cats.map(catTemplate).join(''))
        res.write(homeTemplate);
    }

    res.end();
})

server.listen(5000, () => console.log('Server is listening on port 5000...'));


const catTemplate = (cat) => `
<li>
    <img src="${cat.imgUrl}" alt="Black Cat">
    <h3>${cat.name}</h3>
    <p><span>Price: </span>${cat.price}$</p>
    <p><span>Breed: </span>${cat.breed}</p>
    <p><span>Description: </span>${cat.description}</p>
    <ul class="buttons">
        <li class="btn edit"><a href="">Change Info</a></li>
        <li class="btn delete"><a href="">New Home</a></li>
    </ul>
</li>
`;