import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import { publicRoutes } from './routes';

function App() {
  return (
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
  );
}

export default App;
