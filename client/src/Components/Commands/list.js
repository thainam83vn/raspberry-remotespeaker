import React from 'react';

export default props => {
  const { action, songs } = props;
  return (
    <div>
      <h1>{action}</h1>
      {songs.map(song => (
        <h3 key={song.index}>
          {song.index}.{song.name}
        </h3>
      ))}
    </div>
  );
};
