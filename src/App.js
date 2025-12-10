/* eslint-disable no-undef */
import './App.css';
import ReactBasics from './Components/ReactBasics';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import ToDo from "./Components/ToDo"
import React from "react";
import { ParentChildDropdown } from './Components/ParentChildDropdown';
import Debounce from './Components/Debounce';
import TablePagination from './Components/TablePagination';

function App() {
  

  const router = createBrowserRouter([
    {
      path: '/',
      // element: <ReactBasics />, 
      // element: <ToDo />, 
      // element: <ParentChildDropdown /> 
      // element: <Debounce />
      element: <TablePagination />

    },
   
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
     <RouterProvider router={router} />
  );
}

export default App;
