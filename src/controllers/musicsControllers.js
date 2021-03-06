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
    if(music.SongName)
    {
        musics.push({id: musicId,...music});
        res.status(200).send(`Music named ${music.SongName} was added to list!`);
    } else {
        res.status(500).send(`Music needs to have name!`);
    };
};

exports.getMusic = (req,res) =>{
    const {musicId} = req.params;
    const music = musics.find((music) => music.id === musicId);
    if(music)
    {
        res.status(200).send(music);
    }else {
        res.status(500).send(`Do not have music with id: '${musicId}' in Musics List!`);
    };
};

exports.updateMusic = (req, res) => {
    const {musicId} = req.params;
    const {SongName, Author, Singer} = req.body;
    const music = musics.find((music) => music.id === musicId);
    if(music)
    {
        if(SongName){
            music.SongName = SongName;
        }
        if(Author){
            music.Author = Author;
        }
        if(Singer){
            music.Singer = Singer;
        };
        res.status(200).send(`Music has id: '${musicId}' was updated!`);
    } else {
        res.status(500).send(`Do not have music with id: '${musicId}' in Musics List`);
    };

};

exports.deleteMusic = (req, res) => {
    const {musicId} = req.params;
    const music = musics.find((music) => music.id === musicId);
    if(music)
    {
        // delete musics[{musicId}];
        musics = musics.filter((music) => music.id !== musicId);
        res.status(200).send(`Music id: '${musicId}' was remove from musics list!`);
    }else{
        res.status(500).send(`Do not have music with id: '${musicId}' in Musics List`);
    };
};