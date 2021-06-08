import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NotesPageHeader({
  currentFolder,
  searchValue,
  searchHandler,
}) {
  function handleKeyDown(e) {
    if (e.code === 'Enter') {
      e.preventDefault();
    }
  }
  return (
    <header className="block">
      <form>
        <div className="field has-addons">
          <p className="control">
            <button
              type="button"
              className="button is-link is-medium is-rounded"
            >
              <span className="icon is-small">
                <FontAwesomeIcon icon={faFolderOpen} aria-hidden="true" />
              </span>
              <span>{currentFolder ? currentFolder.title : 'All notes'}</span>
            </button>
          </p>
          <p className="control is-expanded">
            <input
              value={searchValue}
              onChange={searchHandler}
              onKeyDown={handleKeyDown}
              className="input is-medium is-rounded"
              type="text"
              placeholder="Search notes"
            />
          </p>
        </div>
      </form>
    </header>
  );
}
