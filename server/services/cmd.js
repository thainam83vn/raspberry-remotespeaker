var sys = require('sys');
var exec = require('child_process').exec;

module.exports = () => {
  let current;
  return {
    play: url => {
      current = exec('mpg321 /home/pi/song-1.mp3 -a bluealsa');
      console.log('current:', current);
    },
    stop: () => {
      console.log(`kill ${current.pid}`);
      exec(`kill ${current.pid}`);
    }
  };
};
