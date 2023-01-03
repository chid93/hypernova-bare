const React = require('react');
const renderReact = require('hypernova-react').renderReact;

function MyComponent(props) {
  // return <div>Hello, {props.name}!</div>;
  return "Hello";
}

module.exports = renderReact('MyComponent.js', MyComponent);