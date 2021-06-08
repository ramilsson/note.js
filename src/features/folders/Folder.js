import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFolderOpen } from '@fortawesome/free-regular-svg-icons';

export default function Folder({ folder }) {
  const [isOpen, setOpen] = useState(true);
  const hasChildren = folder.children.length > 0;
  const children = useRef();

  function toggleChildren(e) {
    if (hasChildren) {
      e.preventDefault();
      setOpen(!isOpen);
    }
  }
  
  return (
    <li>
      <Link to={`/notes?folder=${folder.id}`}>
        <span className='icon-text'>
          <span className='icon has-text-link'>
            <FontAwesomeIcon onClick={toggleChildren} icon={isOpen && hasChildren ? faFolderOpen : faFolder} />
          </span>
          <span>{folder.title}</span>
        </span>
      </Link>
      <ul ref={children} className={isOpen ? '' : 'is-hidden'}>
        {folder.children.map((folder) => (
          <Folder key={folder.id} folder={folder} />
        ))}
      </ul>
    </li>
  );
}
