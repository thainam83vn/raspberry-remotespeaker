const cwd = process.cwd();
const fs = require('fs');
const FILE_NOW = `${cwd}/data/now.json`;

module.exports = () => {
  const storage = {};
  storage.writeNow = data => {
    fs.writeFileSync(FILE_NOW, JSON.stringify(data));
  };
  storage.readNow = () => {
    return JSON.parse(fs.readFileSync(FILE_NOW));
  };

  return storage;
};
