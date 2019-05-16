var sys = require('sys');
var exec = require('child_process').exec;

module.exports = () => {
  return {
    play: vid => {
      console.log('Playing Youtube vid=' + vid);
      // vid = vid || 'WwOY1o16T4s';
      vid = 'aeHJHjkwDuM';
      exec('killall omxplayer.bin');
      exec(
        `omxplayer -o hdmi "\`youtube-dl -g -f mp4 https://youtube.com?v=${vid}\`"`
      );
    },
    stop: () => {
      console.log('Stop Playing Youtube');
      exec('killall omxplayer.bin');
    }
  };
};
