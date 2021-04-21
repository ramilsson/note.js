import Folder from './Folder';
import { useState, useEffect } from 'react';

const DEFAULT_FOLDERS = [
  {
    id: 1,
    title: 'Folder 1',
    parent: 0,
  },
  {
    id: 2,
    title: 'Folder 2',
    parent: 0,
  },
  {
    id: 3,
    title: 'Folder 3',
    parent: 2,
  },
  {
    id: 4,
    title: 'Folder 4',
    parent: 2,
  },
  {
    id: 5,
    title: 'Folder 5',
    parent: 3,
  },
  {
    id: 6,
    title: 'Folder 6',
    parent: 1,
  },
  {
    id: 7,
    title: 'Folder 7',
    parent: 5,
  },
];

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
    setTree(buildTree(DEFAULT_FOLDERS));
  }, []);

  return (
    <aside className='menu'>
      {tree.map((folder) => (
        <Folder key={folder.id} folder={folder} />
      ))}
    </aside>
  );
}
