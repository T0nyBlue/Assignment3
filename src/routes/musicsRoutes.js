module.exports = (app) => {
    const musicsControllers = require('../controllers/musicsControllers.js');
    app
        .route('/musics')
        .get(musicsControllers.getMusicsList)
        .post(musicsControllers.createMusic);
    
    app
        .route('/musics/:musicId',)
        .get(musicsControllers.getMusic)
        .patch(musicsControllers.updateMusic)
        .delete(musicsControllers.deleteMusic);
};