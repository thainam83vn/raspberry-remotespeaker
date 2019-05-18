const express = require('express');
const player = require('./../services/music')();
const espeak = require('./../services/espeak')();
const youtube = require('./../services/youtube')();
const storage = require('./../services/local-storage')();

module.exports = () => {
  const route = express.Router();

  route.get('/', (req, res) => {
    res.json({ message: '200' });
  });
  route.post('/play', (req, res) => {
    console.log(`playing ${req.body.song}`);
    player.play(req.body.song);
    res.json({ message: '200' });
  });
  route.post('/stop', (req, res) => {
    console.log(`stop playing`);
    player.stop();
    res.json({ message: '200' });
  });
  route.post('/speak', (req, res) => {
    espeak.talk(req.body.text);
    res.json({ message: '200' });
  });
  route.get('/stop-youtube', (req, res) => {
    youtube.stop();
    res.json({ message: '200' });
  });

  route.get('/youtube/list', async (req, res) => {
    const songs = await youtube.list();
    console.log('Show Youtube song list:', songs);
    storage.writeNow({ action: 'list', songs });
    res.json({ songs });
  });

  route.get('/youtube/playsong/:number', async (req, res) => {
    const { number } = req.params;
    const songs = await youtube.list();
    const song = songs.filter(({ vid, name, index }) => index == number)[0];
    console.log('Song list:', { songs, number, song });

    if (song) {
      console.log(`Playing song:`, song);
      storage.writeNow({ action: 'play', song });

      youtube.play(song.vid);
    } else {
      console.log(`Song ${number} not found`);
    }

    res.json(song);
  });

  route.get('/now', async (req, res) => {
    const data = storage.readNow();
    console.log(`Now:`, data);

    res.json(data);
  });

  return route;
};
