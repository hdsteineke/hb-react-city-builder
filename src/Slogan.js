import React from 'react';
import sloganInput from './SloganForm';

export default function Slogan({ slogan }) {
  return (
    <div className='slogan'>
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
      {slogan}
    </div>
  );
}
