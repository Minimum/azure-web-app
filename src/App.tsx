import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '@jetbrains/ring-ui-built/components/style.css';
import './App.css';

import Header from './components/Header';
import LoaderScreen from "@jetbrains/ring-ui-built/components/loader-screen/loader-screen";
import Theme, {applyTheme} from "@jetbrains/ring-ui-built/components/global/theme";

const Home = lazy(() => import('./pages/Home'));
const Boards = lazy(() => import('./pages/Boards'));
const Editor = lazy(() => import('./pages/Editor'));

function App() {
    applyTheme(Theme.DARK, document.body);

  return (
          <Router>
              <Suspense fallback={<LoaderScreen message={'Loading...'}/>}>
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/boards" element={<Boards />} />
                      <Route path="/editor" element={<Editor />} />
                  </Routes>
              </Suspense>
          </Router>
  );
}

export default App;
