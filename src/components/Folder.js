import React from 'react';

export default function Folder({ folder }) {
  if (folder.parent === 0) {
    return (
      <>
        <p className='menu-label'>{folder.title}</p>
        <ul className='menu-list'>
          {folder.children.map((folder) => (
            <Folder key={folder.id} folder={folder} />
          ))}
        </ul>
      </>
    );
  }
  return (
    <li>
      <a href='#'>{folder.title}</a>
      <ul>
        {folder.children.map((folder) => (
          <Folder key={folder.id} folder={folder} />
        ))}
      </ul>
    </li>
  );
}
