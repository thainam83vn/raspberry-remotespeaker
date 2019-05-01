var sys = require('sys');
var exec = require('child_process').exec;

module.exports = () => {
  return {
    talk: text => {
      exec(`espeak "${text}" --stdout | aplay bluealsa`);
    }
  };
};
