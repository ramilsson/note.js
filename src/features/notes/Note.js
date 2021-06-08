import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { formatDate } from 'common/utilities';

export default function Note({ note }) {
  return (
    <Link to={`notes/${note.id}`} className="notes-grid__item note-card card">
      <div className="note-card__inner card-content">
        <p className="title is-4">{note.title}</p>
        <div className="subtitle is-7">
          <ReactMarkdown>{note.body.slice(0, 96) + '...'}</ReactMarkdown>
        </div>
        <div className="note-card__footer">
          <div className="tags">
            <div className="tag">{formatDate(note.createdAt)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
