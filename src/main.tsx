import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {HashRouter} from "react-router-dom";
import * as Sentry from "@sentry/react";
import axios from "axios";
console.log(Sentry,'Sentry')
if (import.meta.env.MODE !== 'development') {
    const backConfig = await axios.post('http://124.223.27.177:24000/frontEndConfig',{}).then(res=>res.data)
    Sentry.init({
        dsn: backConfig.sentryDsn,
        integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
        // Performance Monitoring
        tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
        // Session Replay
        replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
        replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
    });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <HashRouter>
          <App />
      </HashRouter>
  </React.StrictMode>,
)
