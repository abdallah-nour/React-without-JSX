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
