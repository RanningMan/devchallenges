import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App, {loader as appLoader } from './App';
import JobDescription, { loader as jobDescriptionLoader } from './JobDescription';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Oops!</div>,
    loader: appLoader
  },
  {
    path: '/job/:jobId',
    element: <JobDescription />,
    loader: jobDescriptionLoader,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
