import Home from "./pages/home/Home";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import "./App.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Home/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        
      ],
    },
   
  ]);

  return <RouterProvider router={router} />;
}

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);

export default App;
