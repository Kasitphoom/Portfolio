import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'

// components
import App from './App.jsx'
import './index.css'

// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from './pages/search/index.jsx';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { onRequest } from './index.js'

library.add(fab, fas)

// if localStorage has empty theme
if (!localStorage.theme) {
  localStorage.theme = 'dark'
}

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const theme = async () => {
  const API_TOKEN = "gya3oy5YiL-vFTKNNygjZ39dn0aIWv5oo0oLxPM3"
  const ACCOUNT_ID = "bdc9249808c282142a516e6a8af31b69"
  const DATABASE_ID = "f0f5d5b5-c5b9-4eb8-b3f9-76bdc9882e33"

  const requestOptions = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      "query": "SELECT * FROM projects",
      "params": []
    })
  }

  fetch(`https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DATABASE_ID}/query`, requestOptions)
  .then(res => console.log(res.json()))
  .catch(err => console.error(err))
}

onRequest()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
