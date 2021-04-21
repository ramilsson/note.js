import Folder from './Folder';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/folders`)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((folders) => {
        setTree(buildTree(folders));
      })
      .catch(() => alert('Could not fetch folders from the server'));
  }, []);

  return (
    <aside className='menu'>
      {tree.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
    </aside>
  );
}
