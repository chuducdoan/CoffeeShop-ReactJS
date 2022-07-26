
import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AuthContextProvider from '~/context/AuthContext';
import DefaultLayout from './layout/DefaultLayout';
import { publicRoutes } from './routes';

import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from './action';
import './App.css';
import { auth } from './firebase';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            dispatch(setUser(currentUser));
        });
        return () => {
            unsubscribe();
        }
  }, []);

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
