
import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthContextProvider from '~/context/AuthContext';
import DefaultLayout from './layout/DefaultLayout';
import { publicRoutes } from './routes';

import './App.css';

function App() {

  const [currentUser, setCurrentUser] = useState();

  // handle firebase auth changed
  useEffect(() => {
    // const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    // return unsub;
  }, [])

  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((value, index) => {
              // Bien trong jsx thi phai viet hoa chu cai dau
              let Layout = DefaultLayout;
              if (value.layout) {
                Layout = value.layout;
              } else if (value.layout === null) {
                Layout = Fragment;
              }
              const Page = value.component;
              return <Route
                key={index}
                path={value.path}
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
              />
            })}
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
