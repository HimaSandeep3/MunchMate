import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement('div', { className: 'grandParent' }, 
        React.createElement('div', { className: 'parent' }, 
        [React.createElement('h1', { className: 'child' },'H1 Tag- Header'),
        React.createElement('p', {},'This is a paragraph')]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
