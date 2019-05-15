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
  route.post('/youtube', (req, res) => {
    youtube.play(req.body.vid);
    res.json({ message: '200' });
  });
  return route;
};
