import { store } from 'app/store';
import { Provider } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchNotes } from 'features/notes/notesSlice';
import { fetchFolders } from 'features/folders/foldersSlice';

export default function AppProvider({ children }) {
  useEffect(() => {
    store.dispatch(fetchFolders);
    store.dispatch(fetchNotes);
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
