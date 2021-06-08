import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header className='hero is-small is-dark'>
      <div className='hero-body'>
        <div className='level is-mobile'>
          <div className='level-left'>
            <Link to='/'>
              <img className='is-block' width='128' src='/logo.svg' alt='Note.js' />
            </Link>
          </div>
          <div className='level-right'>
            <a className='button' href='https://github.com/khuzhinru/note.js' target='_blank' rel='noreferrer'>
              <span className='icon'>
                <FontAwesomeIcon icon={faGithub} />
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
