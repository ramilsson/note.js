import React from 'react';
import { Link} from 'react-router-dom';
import { faFolder} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Subfolders({ folder }) {
  if (!folder) {
    return null;
  }
  return (
    <div className='block'>
      <div className='buttons are-medium'>
        {folder.children.map((subFolder) => (
          <Link key={subFolder.id} to={`/notes?folder=${subFolder.id}`} className='button is-white'>
            <span className='icon has-text-warning'>
              <FontAwesomeIcon icon={faFolder} />
            </span>
            <span>{subFolder.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
