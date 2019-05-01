var sys = require('sys');
var exec = require('child_process').exec;

module.exports = () => {
  return {
    talk: text => {
      console.log(`talking: ${text}`);

      exec(
        `espeak "${text}" -ven-us+m3 -p40 -s120 --stdout | aplay -D bluealsa`
      );
    }
  };
};
