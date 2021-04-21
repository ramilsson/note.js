import React, { useState, useEffect } from 'react';
import Folder from './Folder';
import FolderForm from './FolderForm';

function buildTree(folders) {
  const idMapping = folders.reduce((acc, folder, index) => {
    acc[folder.id] = index;
    return acc;
  }, {});

  const root = {};

  folders.forEach((folder) => {
    folder.children = [];
    const parentFolder = folder.parent === 0 ? root : folders[idMapping[folder.parent]];
    parentFolder.children = [...(parentFolder.children || []), folder];
  });

  return root.children;
}

export default function Navigation() {
  const [tree, setTree] = useState([]);
  const [folders, setFolders] = useState([]);

  useEffect(() => fetchFolders(), []);

  function fetchFolders() {
    fetch(`${process.env.REACT_APP_API_URL}/folders`)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((folders) => {
        setTree(buildTree(folders));
        setFolders(folders);
      })
      .catch(() => alert('Could not fetch folders from the server'));
  }

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
        fetchFolders();
      })
      .catch(() => alert('Could not create the folder'));
  }

  return (
    <aside className='menu'>
      {tree.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
      <div className='mt-5'>
        <FolderForm onSubmit={createFolder} folders={folders} />
      </div>
    </aside>
  );
}
