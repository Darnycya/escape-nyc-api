import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link to='/players'>
        <img className="logo" alt="dallas-logo" src="https://res.cloudinary.com/darnycya/image/upload/v1615691659/Dallas-Cowboys-PNG-Clipart_jmdnwz.png"></img>
        </Link>
    </div>
  )
}
