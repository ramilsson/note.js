import React, { useContext } from 'react';
import Folder from './Folder';
import FolderForm from './FolderForm';
import useTree from '../hooks/useTree';
import AppContext from './AppContext';

export default function Navigation() {
  const {folders} = useContext(AppContext);
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
      {foldersTree.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
      <div className='mt-5'>
        <FolderForm onSubmit={createFolder} folders={folders} />
      </div>
    </aside>
  );
}
