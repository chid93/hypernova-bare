const express = require('express');
const Renderer = require('hypernova-client');
const devModePlugin = require('hypernova-client/plugins/devModePlugin');

const app = express();

const renderer = new Renderer({
  url: 'http://localhost:3030/batch',
  plugins: [
    devModePlugin,
  ],
});

app.get('/', (req, res) => {
  const jobs = {
    'MyComponent.js': { name: req.query.name || 'Stranger' },
  };

  renderer.render(jobs).then(html => res.send(html));
});

app.listen(8080, () => console.log('Now listening'));