import React from 'react';
import { Link } from 'react-router-dom';

/* @TODO – Render the current folder link and its all parents */
export default function Breadcrumb({ currentFolder, className }) {
  if (!currentFolder) {
    return null;
  }
  return (
    <nav className={`breadcrumb ${className}`} aria-label='breadcrumbs'>
      <ul>
        {/* Parent folders... */}
        <li>
            <Link to='/notes'>...</Link>
        </li>
        <li>
          <Link to={`/notes?folder=${currentFolder.id}`} aria-current='page'>
            {currentFolder.title}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
