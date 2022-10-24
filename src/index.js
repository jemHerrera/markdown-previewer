import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import MarkDownPreviewer from './MarkDownPreviewer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MarkDownPreviewer />
  </React.StrictMode>
);
