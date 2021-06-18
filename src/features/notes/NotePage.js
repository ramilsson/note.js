import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { formatDate } from 'common/utilities';
import NoteBreadcrumb from 'features/notes/NoteBreadcrumb';
import { selectNoteById } from './notesSlice';
import { selectFolderById } from 'features/folders/foldersSlice';

export default function NotePage() {
  const { id } = useParams();
  const note = useSelector((state) => selectNoteById(state, +id));
  const folder = useSelector((state) =>
    selectFolderById(state, note?.folderId)
  );

  if (!note) {
    return null;
  }
  return (
    <>
      <header className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
        <NoteBreadcrumb folder={folder} note={note} />
        <Link to={`/notes/${note.id}/edit`} className="button is-small">
          Edit
        </Link>
      </header>
      <div className="box content">
        <h1>{note.title}</h1>
        <ReactMarkdown>{note.body}</ReactMarkdown>
        <div className="tags mt-5">
          <div className="tag is-link is-light">
            {formatDate(note.createdAt)}
          </div>
        </div>
      </div>
    </>
  );
}
