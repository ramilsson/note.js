import React, { useState, useEffect } from 'react';
import AppContext from 'app/AppContext';

export default function AppProvider({ children }) {
  const [folders, setFolders] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchFolders();
    fetchNotes();
  }, []);

  function fetchFolders() {
    fetch(`${process.env.REACT_APP_API_URL}/folders`)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((folders) => {
        setFolders(folders);
      })
      .catch(() => alert('Could not fetch folders from the server'));
  }

  function fetchNotes() {
    fetch(`${process.env.REACT_APP_API_URL}/notes`)
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((notes) => {
        setNotes(notes);
      })
      .catch(() => alert('Could not fetch notes from the server'));
  }

  return (
    <AppContext.Provider
      value={{
        folders,
        notes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
