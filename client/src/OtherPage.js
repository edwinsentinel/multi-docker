import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Thhis is the secondary page I was talking about
      <Link to="/">Wanna go back to the previous page?</Link>
    </div>
  );
};
