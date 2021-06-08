import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import AppContext from 'app/AppContext';
import { formatDate } from 'common/utilities';
import NoteBreadcrumb from 'features/notes/NoteBreadcrumb';

export default function NotePage() {
  const { id } = useParams();
  const { notes, folders } = useContext(AppContext);
  const note = notes.find((note) => note.id === +id);
  const folder = note && folders.find((folder) => folder.id === note.folderId);

  if (!note) {
    return null;
  }
  return (
    <>
      <header className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
        <NoteBreadcrumb currentFolder={folder} currentNote={note} />
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
