import React, { useContext } from 'react';
import AppContext from 'app/AppContext';
import { useHistory } from 'react-router-dom';
import NoteForm from 'features/notes/NoteForm';

export default function NoteCreatePage() {
  const history = useHistory();
  const { folders } = useContext(AppContext);

  function createNote(note) {
    fetch(`${process.env.REACT_APP_API_URL}/notes`, {
      method: 'POST',
      body: JSON.stringify(note),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        alert('The note has created successfully');
        history.push('/notes');
      })
      .catch(() => alert('Error. Could not create a note'));
  }

  return (
    <>
      <h1 className="title">Create note</h1>
      <div className="box">
        <NoteForm folders={folders} onSubmit={createNote} />
      </div>
    </>
  );
}
