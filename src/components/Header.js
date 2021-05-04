import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='hero is-small is-dark'>
      <div className='hero-body'>
        <Link to='/'>
          <img className='is-block' width='128' src='/logo.svg' alt='Note.js' />
        </Link>
      </div>
    </header>
  );
}
