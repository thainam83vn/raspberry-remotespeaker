var sys = require('sys');
var exec = require('child_process').exec;
var axios = require('axios');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = () => {
  return {
    list: async vid => {
      const jsonSample = (await axios(
        'https://s3.amazonaws.com/thainamtran-alexa/sample.json'
      )).data;
      let songs = jsonSample.songs;
      songs = songs.map((song, index) => ({ ...song, index: index + 1 }));
      return songs;
    },
    play: async vid => {
      let songs = (await axios(
        'https://s3.amazonaws.com/thainamtran-alexa/youtube_songs.txt'
      )).data.split('\n');
      songs = songs.map(s => s.replace('\r', ''));
      vid = songs[getRandomInt(songs.length) % songs.length];
      console.log('youtube kill all');
      exec('killall omxplayer.bin');
      console.log(`youtube playing ${vid}`);
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
