var sys = require('sys');
var exec = require('child_process').exec;
var axios = require('axios');

module.exports = () => {
  return {
    play: async vid => {
      let songs = (await axios(
        'https://s3.amazonaws.com/thainamtran-alexa/youtube_songs.txt'
      )).data.split('\n');
      songs = songs.map(s => s.replace('\r', ''));
      vid = songs[0];
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
