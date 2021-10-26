const { v4: uuidv4 } = require('uuid');

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

exports.getMusicsList = (req, res) => {
    res.send(musics);
};

exports.createMusic = (req, res) => {
    const music = req.body;
    const musicId = uuidv4();
    musics.push({id: musicId,...music});
    res.send(`Music named ${music.SongName} was added to list!`);
};

exports.getMusic = (req,res) =>{
    const {musicId} = req.params;
    const music = musics.find((music) => music.id === musicId);
    res.send(music);
};

exports.updateMusic = (req, res) => {
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
};

exports.deleteMusic = (req, res) => {
    const {musicId} = req.params;
    // delete musics[{musicId}];
    musics = musics.filter((music) => music.id !== musicId);
    res.send(`Music id ${musicId} was remove from musics list!`);
};