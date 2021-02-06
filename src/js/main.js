import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <article>
      <header>
        <h1>article header h1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam
          bibendum iaculis libero, eget molestie nisl pharetra in. In semper
          consequat est, eu porta velit mollis nec.
        </p>
      </header>
      <section>
        <h2>article section h2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam
          bibendum iaculis libero, eget molestie nisl pharetra in. In semper
          consequat est, eu porta velit mollis nec. Curabitur posuere enim eget
          turpis feugiat tempor. Etiam ullamcorper lorem dapibus velit suscipit
          ultrices. Proin in est sed erat facilisis pharetra.
        </p>
      </section>
      <section>
        <h2>article section h2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam
          bibendum iaculis libero, eget molestie nisl pharetra in. In semper
          consequat est, eu porta velit mollis nec. Curabitur posuere enim eget
          turpis feugiat tempor. Etiam ullamcorper lorem dapibus velit suscipit
          ultrices. Proin in est sed erat facilisis pharetra.
        </p>
      </section>
      <footer>
        <h3>article footer h3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          sodales urna non odio egestas tempor. Nunc vel vehicula ante. Etiam
          bibendum iaculis libero, eget molestie nisl pharetra in. In semper
          consequat est, eu porta velit mollis nec. Curabitur posuere enim eget
          turpis feugiat tempor.
        </p>
      </footer>
    </article>
  );
}

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);

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
