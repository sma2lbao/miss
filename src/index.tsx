import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase/app";
import "firebase/analytics";

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
});
firebase.analytics();

Sentry.init({
  enabled: process.env.NODE_ENV === "production",
  dsn: process.env.REACT_APP_SENTRY_DSN
});

const rootElement = document.getElementById("root");
if (rootElement?.hasChildNodes()) {
  ReactDOM.render(<App />, rootElement, () => {
    const ssStyles = document.getElementById("server-side-styles");
    console.log("ssStyles", ssStyles);
    ssStyles?.parentNode?.removeChild(ssStyles);
  });
} else {
  ReactDOM.render(<App />, document.getElementById("root"), () => {
    prerender();
  });
}

function prerender() {
  // create a public-path.js
  const isPrerender =
    window["__PRERENDER_INJECTED__"] &&
    window["__PRERENDER_INJECTED__"].isPrerender;

  if (isPrerender) {
    // add your condition for the prerendering
    const getAllCSS = () => {
      let styles = "";
      const stylesheets = document.styleSheets;

      for (const stylesheet of stylesheets) {
        if (
          !stylesheet.href &&
          stylesheet.cssRules &&
          stylesheet.cssRules.length
        ) {
          for (const rule of stylesheet.cssRules) {
            styles += rule.cssText;
          }
        }
      }

      return styles;
    };
    const styles = getAllCSS();

    const removeAllStyleTagsFromHead = head => {
      const styleTags = head.querySelectorAll("style");
      for (const styleTag of styleTags) {
        styleTag.remove();
      }
    };

    const head = document.head;
    removeAllStyleTagsFromHead(head);

    const elStyle = document.createElement("style");
    elStyle.id = "server-side-styles";
    elStyle.innerHTML = styles;
    head.appendChild(elStyle);
  }
}

// ReactDOM.render(<App />, document.getElementById("root"), () => {
//   const ssStyles = document.getElementById("server-side-styles");
//   console.log("ssStyles", ssStyles);
//   // ssStyles?.parentNode?.removeChild(ssStyles);
// });

// const rootElement = document.getElementById("root");
// if (rootElement?.hasChildNodes()) {
//   ReactDOM.hydrate(<App />, rootElement);
// } else {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
