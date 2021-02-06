import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const renderApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
const container = document.querySelector('#root');
ReactDOM.hydrate(renderApp(), container);

// Cloudflare Web Analytics:
if (!module.hot) {
  const beacon = {
    token: process.env.CF_TOKEN,
  };
  const cfAnalyticsTag = document.createElement('script');
  cfAnalyticsTag.defer = true;
  cfAnalyticsTag.setAttribute('data-cf-beacon', JSON.stringify(beacon));
  cfAnalyticsTag.src = 'https://static.cloudflareinsights.com/beacon.min.js';

  document.body.append(cfAnalyticsTag);
}
