import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.tsx'


const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);