import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Preloader from './components/Preloader';

const Apps = React.lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <Apps />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
