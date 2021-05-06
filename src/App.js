import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NotesPage from './components/NotesPage';
import NotePage from './components/NotePage';
import NoteCreatePage from './components/NoteCreatePage';
import AppProvider from './components/AppProvider';
import NoteEditPage from './components/NoteEditPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <main className='section'>
          <div className='columns'>
            <div className='column'>
              <Navigation />
            </div>
            <div className='column is-two-thirds'>
              <Switch>
                <Route path='/notes' exact>
                  <NotesPage />
                </Route>
                <Route path='/notes/create' exact>
                  <NoteCreatePage />
                </Route>
                <Route path='/notes/:id' exact>
                  <NotePage />
                </Route>
                <Route path='/notes/:id/edit' exact>
                  <NoteEditPage />
                </Route>
                <Route path='/'>
                  <NotesPage />
                </Route>
              </Switch>
            </div>
            <div className='column'>{/* Some widgets */}</div>
          </div>
        </main>
        <Footer/>
      </Router>
    </AppProvider>
  );
}
