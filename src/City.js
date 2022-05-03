import React from 'react';

export default function City({ skylineId, waterfrontId, castleId }) {
  return (
    <div className="city">
      {/* this component should take 3 props: waterfrontId, skylineId, and castlId */}
      {/* use these 3 ids in img tags load approriate images that live in the public directory */}
      <img src={`${skylineId}.jpeg`} />
      <img src ={`${waterfrontId}.jpeg`} />
      <img src ={`${castleId}.jpeg`} />
    </div>
  );
}
