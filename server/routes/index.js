const express = require('express');
const player = require('./../services/music')();
const espeak = require('./../services/espeak')();
const youtube = require('./../services/youtube')();
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
    // youtube.play(req.body.vid);
    youtube.stop();
    res.json({ message: '200' });
  });
  route.get('/youtube/list', async (req, res) => {
    const songs = await youtube.list();
    console.log('Show Youtube song list:', songs);
    res.json({ songs });
    // res.json({
    //   songs: [
    //     { index: 1, name: 'Let it go' },
    //     { index: 2, name: `How far I'll go` },
    //     { index: 3, name: 'Shake it off' }
    //   ]
    // });
  });
  route.get('/youtube/playsong/:number', async (req, res) => {
    const { number } = req.params;
    const songs = await youtube.list();
    const song = songs.filter(({ vid, name, index }) => index == number);
    console.log('Song list:', { songs, number, song });

    if (song) {
      console.log(`Playing song:`, song);
      youtube.play(song.vid);
    } else {
      console.log(`Song ${number} not found`);
    }

    res.json(song);
  });
  // route.get('/youtube', (req, res) => {
  //   // youtube.play(req.body.vid);
  //   youtube.play('Oc6HSonlwJ8');
  //   res.json({ message: '200' });
  // });
  return route;
};
