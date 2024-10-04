import { RouterProvider } from 'react-router-dom';

import { Reset } from 'styled-reset';

import '@/App.css';
import { Router } from '@/router/Router';

function App() {
  return (
    <>
      <Reset />
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
