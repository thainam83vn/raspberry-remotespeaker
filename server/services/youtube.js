var sys = require('sys');
var exec = require('child_process').exec;

module.exports = () => {
  return {
    play: vid => {
      console.log('Playing Youtube vid=' + vid);
      vid = vid || 'WwOY1o16T4s';
      exec(
        `omxplayer -o hdmi "\`youtube-dl -g -f mp4 https://youtube.com?v=${vid}\`"`
      );
    }
  };
};
