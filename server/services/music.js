var sys = require('sys');
var exec = require('child_process').exec;
var mpg321 = require('mpg321');
const player = mpg321()
  .audiodevice('bluealsa')
  .remote();
const MUSIC_FOLDER = '/home/pi/musics';

module.exports = () => {
  let current;
  return {
    play: url => {
      // current = exec('mpg321 /home/pi/song-1.mp3 -a bluealsa');
      player.play(`${MUSIC_FOLDER}/${req.body.song}.mp3`);
      console.log('current:', current);
    },
    stop: () => {
      console.log(`stop playing`);
      player.stop();
      // exec(`kill ${current.pid}`);
    }
  };
};
