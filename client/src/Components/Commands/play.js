import React from 'react';

export default props => {
  const { action, song } = props;
  return (
    <div>
      <h1>{action}</h1>
      <h3>Song {song.name}</h3>
    </div>
  );
};
