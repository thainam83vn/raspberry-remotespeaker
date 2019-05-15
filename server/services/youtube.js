var sys = require('sys');
var exec = require('child_process').exec;

module.exports = () => {
  return {
    play: vid => {
      exec(
        `omxplayer -o hdmi "\`youtube-dl -g -f mp4 https://youtube.com?v=${vid}\`"`
      );
    }
  };
};
