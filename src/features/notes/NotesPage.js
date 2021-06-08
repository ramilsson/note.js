import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NotesGrid from 'features/notes/NotesGrid';
import Subfolders from 'features/folders/Subfolders';
import NotesPageHeader from 'features/notes/NotesPageHeader';
import AppContext from 'app/AppContext';

export default function NotesPage() {
  const location = useLocation();
  const { notes, folders } = useContext(AppContext);
  const [filter, setFilter] = useState(null);
  const [currentFolder, setCurrentFolder] = useState();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setFilter({
      folderId: +query.get('folder'),
      search: query.get('search'),
    });
  }, [location]);

  useEffect(() => {
    if (!filter) {
      return;
    }

    if (filter.folderId) {
      const folder = folders.find((f) => f.id === filter.folderId);
      if (folder) {
        setCurrentFolder(folder);
      }
    }
  }, [filter, folders]);

  function handleSearch(e) {
    setFilter({
      ...filter,
      search: e.target.value,
    });
  }

  return (
    <>
      <NotesPageHeader
        currentFolder={currentFolder}
        searchValue={filter && filter.search ? filter.search : ''}
        searchHandler={handleSearch}
      />
      <Subfolders folder={currentFolder} />
      <NotesGrid notes={notes} filter={filter} />
    </>
  );
}
