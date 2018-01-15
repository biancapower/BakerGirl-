import React from 'react';

export default function Instagram(props) {

  const { instagramData } = props;
  console.log('instagramData is: ', instagramData);
  return (
    <div>
      { JSON.stringify(instagramData) }
    </div>
  )
}
