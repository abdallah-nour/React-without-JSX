// for more details
// https://reactjs.org/docs/react-without-jsx.html

const element = React.createElement(
  'h1',
  {
    className: 'container',
  },
  'WoW!',
  React.createElement('br'),
  "That's Cool 🚀"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
