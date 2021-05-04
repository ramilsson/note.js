import React, { useState, useEffect } from 'react';
import Note from './Note';
import '../styles/notes-grid.scss';

export default function NotesGrid({ notes, filter }) {
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    if (!filter || !notes) {
      return;
    }
    setFilteredNotes(
      notes.filter((note) => {
        const folderFilter = filter.folderId ? note.folderId === filter.folderId : true;
        const searchFilter =
          filter.search && filter.search !== '' ? note.title.toLowerCase().includes(filter.search.toLowerCase()) : true;
        return folderFilter && searchFilter;
      })
    );
  }, [filter, notes]);

  return (
    <>
      <div className='level is-mobile mb-2'>
        <div className='level-left'>
          <small className='has-text-grey'>
            {filteredNotes.length} of {notes.length} notes
          </small>
        </div>
        <div className='level-right'></div>
      </div>
      <div className='notes-grid'>
        {filteredNotes && filteredNotes.map((note) => <Note key={note.id} note={note} />)}
      </div>
    </>
  );
}
