import React, { useContext } from 'react';
import AppContext from 'app/AppContext';
import NoteForm from 'features/notes/NoteForm';
import { useHistory, useParams } from 'react-router-dom';

export default function NoteEditPage() {
  const { notes, folders } = useContext(AppContext);
  const { id } = useParams();
  const note = notes.find((note) => note.id === +id);
  const history = useHistory();

  function editNote(note) {
    fetch(`${process.env.REACT_APP_API_URL}/notes/${note.id}`, {
      method: 'PUT',
      body: JSON.stringify(note),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        alert('The note has updated successfully');
        history.push('/notes');
      })
      .catch(() => alert('Error. Could not update the note'));
  }

  return (
    <>
      <h1 className="title">Edit note</h1>
      <div className="box">
        <NoteForm formData={note} folders={folders} onSubmit={editNote} />
      </div>
    </>
  );
}
