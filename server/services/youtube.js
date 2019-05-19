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
    play: vid => {
      return new Promise((resolve, reject) => {
        console.log('youtube kill all');
        exec('killall omxplayer.bin');
        console.log(`youtube playing ${vid}`);
        exec(
          `omxplayer -o hdmi "\`youtube-dl -g -f mp4 https://youtube.com?v=${vid}\`"`,
          (error, stdout, stdin) => {
            if (error) {
              reject();
            } else {
              console.log('omxplayer-done');
            }
          }
        );
        resolve();
      });
    },
    stop: () => {
      console.log('Stop Playing Youtube');
      exec('killall omxplayer.bin');
    }
  };
};
