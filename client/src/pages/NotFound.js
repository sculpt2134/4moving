import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1 className="display-5 mb-3">404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link className="btn btn-primary" to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;


