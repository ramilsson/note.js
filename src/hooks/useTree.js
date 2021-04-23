export default function useTree(folders) {
  const idMapping = folders.reduce((acc, folder, index) => {
    acc[folder.id] = index;
    return acc;
  }, {});

  const root = {
    children: [],
  };

  folders.forEach((folder) => {
    folder.children = [];
    const parentFolder = folder.parent === 0 ? root : folders[idMapping[folder.parent]];
    parentFolder.children = [...(parentFolder.children || []), folder];
  });

  return root.children;
}
