import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link to='/players'>
        <img className="logo" alt="dallas-logo" src="http://clipart-library.com/image_gallery2/Dallas-Cowboys-PNG-Clipart.png"></img>
        </Link>
    </div>
  )
}
