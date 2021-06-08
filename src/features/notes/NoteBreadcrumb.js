import React from 'react';
import { Link } from 'react-router-dom';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Breadcrumb({ currentFolder, currentNote }) {
  if (!currentFolder || !currentNote) {
    return null;
  }
  return (
    <nav className="breadcrumb has-bullet-separator" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to={`/notes?folder=${currentFolder.id}`} aria-current="page">
            <span className="icon has-text-warning">
              <FontAwesomeIcon icon={faFolder} />
            </span>
            <span>{currentFolder.title}</span>
          </Link>
        </li>
        <li className="is-active">
          <Link to={`/notes/${currentNote.id}`}>{currentNote.title}</Link>
        </li>
      </ul>
    </nav>
  );
}
