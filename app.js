const heading = React.createElement('h1',{class:'one'},'hello world from react');
const parent = React.createElement('div',{class:'parent'},[heading,
    React.createElement('p', {},'test')
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent,heading);