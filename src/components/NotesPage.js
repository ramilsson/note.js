import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import AppContext from './AppContext';

export default function NotesPage() {
  const query = useQuery();
  const { notes, folders } = useContext(AppContext);
  const folder = folders.find((folder) => folder.id === +query.get('folder'));
  const filteredNotes = folder ? notes.filter((note) => note.folderId === folder.id) : notes;

  return (
    <>
      <header className='level'>
        <div className='level-left'>
          <h1 className='title'>{folder && folder.title}</h1>
        </div>
        <div className='level-right'>
          <Link to='/notes/create' className='button is-link'>
            Create note
          </Link>
        </div>
      </header>
      <div className='box'>
        {filteredNotes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </>
  );
}

function Note({ note }) {
  return (
    <article className='media'>
      <div className='media-content'>
        <div className='content'>
          <h2 className='is-size-4'>
            <Link to={`notes/${note.id}`}>{note.title}</Link>
          </h2>
          <p>Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
        </div>
      </div>
    </article>
  );
}
