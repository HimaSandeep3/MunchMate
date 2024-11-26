const heading = React.createElement('div', { className: 'grandParent' }, 
        React.createElement('div', { className: 'parent' }, 
        [React.createElement('h1', { className: 'child' },'H1 Tag'),
        React.createElement('p', {},'This is a paragraph')]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
