import Header from './components/Header';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <>
      <Header />
      <main className='section'>
        <div className='columns'>
          <div className='column'>
            <Navigation/>
          </div>
          <div className='column is-half'>
            <div className='box'>
              {/* List of notes */}
            </div>
          </div>
          <div className='column'>
            {/* Some widgets */}
          </div>
        </div>
      </main>
    </>
  );
}
