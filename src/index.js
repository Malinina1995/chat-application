import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';

import "./style.css";

import { App } from "./src/Components/AppComponent/App";
import { store } from "./redux-store";


  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById("root")
  );

