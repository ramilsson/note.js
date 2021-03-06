import React, { useContext } from 'react';
import Folder from 'features/folders/Folder';
import FolderForm from 'features/folders/FolderForm';
import useTree from 'hooks/useTree';
import AppContext from 'app/AppContext';

export default function Navigation() {
  const { folders } = useContext(AppContext);
  const foldersTree = useTree(folders);

  function createFolder(folder) {
    fetch(`${process.env.REACT_APP_API_URL}/folders`, {
      method: 'POST',
      body: JSON.stringify(folder),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        alert('The folder has created successfully');
      })
      .catch(() => alert('Could not create the folder'));
  }

  return (
    <aside className='menu'>
      <p className='menu-label'>Navigation</p>
      <ul className='menu-list'>
        {foldersTree.map((folder) => (
          <Folder key={folder.id} folder={folder} />
        ))}
      </ul>
      <div className='mt-5'>
        <FolderForm onSubmit={createFolder} folders={folders} />
      </div>
    </aside>
  );
}
