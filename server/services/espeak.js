var sys = require('sys');
var exec = require('child_process').exec;

module.exports = () => {
  return {
    talk: text => {
      exec(
        `espeak "${
          req.body.text
        }" -ven-us+m3 -p40 -s120 --stdout | aplay -D bluealsa`
      );
    }
  };
};
