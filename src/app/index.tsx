import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './components/App';

const domNode = document.getElementById('react-page');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
