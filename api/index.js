const express = require('express');
var bodyParser = require('body-parser');
var fs = require('file-system');
var cors = require('cors');

const app = express();

app.use(cors({origin: 'http://localhost:3000'}));

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(express.static('public'));

app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({
    extended: true,
    limit: '50mb'
}));

app.get('/', (req, res) => {
    // console.log(__dirname + "/views/index.html");  + ""
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/image/:id', (req, res) => {
    fs.readFile("./views/index.html", (err, html) => {
        var htmlString = html.toString();

        var variable = htmlString.match(/[^\{\}]+(?=\})/g);
        var link = req.params.id;

        for (var i = 0; i < variable.length; i++) {
            var value = eval(variable[i]);
            htmlString = htmlString.replace("{"+variable[i]+"}", value);            
        };

        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(htmlString);
        res.end();
    });
});

app.post("/files", (req, res) => {

    // res.send({
    //     nameImagen: req.body.nameImagen,
    //     imagen: req.body.imagen
    // });

    if (req.body.imagen != "") {
        let img = req.body.imagen.replace('data:image/jpeg;base64,', '');
        let nameImg = Date.now() + '_' + req.body.nameImagen + ".jpg";

        var buf = Buffer.from(img, 'base64');

        fs.writeFile( `uploads/${nameImg}` , buf , (err, data) => {
            console.log(nameImg);
            if (err) {
                res.send({
                    status: err
                });
            } else {
                let url = `${__dirname}/image/${nameImg}`
                res.send({
                    status: url
                });
            }
        });
    }


    // res.send("Todo bien!");
});

app.listen(8080, () => {
    console.log("Server Started");
})