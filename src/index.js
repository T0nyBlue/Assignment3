const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3636;

let musics = [
    {
        id: uuidv4(),
        SongName: 'Taste',
        Author: 'Tyga',
        Singer: 'Tyga'
    },
    {   
        id: uuidv4(),
        SongName: 'ToGetHer',
        Author: 'Binz',
        Singer: 'Binz'
    },
];

app.use(bodyParser.json());

app.use(bodyParser.json());

app.get('/musics', (req, res) => {
    res.send(musics);
});

app.post('/musics', (req, res) => {
    const music = req.body;
    const musicId = uuidv4();
    musics.push({id: musicId,...music});
    res.send(`Music named ${req.body.SongName} was added to list!`);
});

app.get('/musics/:musicId', (req,res) =>{
    const {musicId} = req.params;
    const music = musics.find((music) => music.id === musicId);
    res.send(music);
});

app.patch('/musics/:musicId', (req, res) => {
    const {musicId} = req.params;
    const {SongName, Author, Singer} = req.body;
    const music = musics.find((music) => music.id === musicId);
    if(SongName){
        music.SongName = SongName;
    }
    if(Author){
        music.Author = Author;
    }
    if(Singer){
        music.Singer = Singer;
    };
    res.send(`Music named ${SongName} was updated!`);
});

app.delete('/musics/:musicId', (req, res) => {
    const {musicId} = req.params;
    delete musics[{musicId}];
    res.send(`Music id ${musicId} was deleted!`);
});

app.get('/', (req, res) => {
    res.send('Welcome to music management API!');
});

app.listen(port, () => console.log(`Server running on por: http://localhost:${port}`));
