import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'common/layout/Header';
import Footer from 'common/layout/Footer';
import AppProvider from 'app/AppProvider';
import NotePage from 'features/notes/NotePage';
import NotesPage from 'features/notes/NotesPage';
import NoteEditPage from 'features/notes/NoteEditPage';
import NoteCreatePage from 'features/notes/NoteCreatePage';
import Navigation from 'features/folders/Navigation';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <main className="section">
          <div className="columns">
            <div className="column">
              <Navigation />
            </div>
            <div className="column is-two-thirds">
              <Switch>
                <Route path="/notes" exact>
                  <NotesPage />
                </Route>
                <Route path="/notes/create" exact>
                  <NoteCreatePage />
                </Route>
                <Route path="/notes/:id" exact>
                  <NotePage />
                </Route>
                <Route path="/notes/:id/edit" exact>
                  <NoteEditPage />
                </Route>
                <Route path="/">
                  <NotesPage />
                </Route>
              </Switch>
            </div>
            <div className="column">{/* Some widgets */}</div>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  );
}
