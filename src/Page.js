import React from "react";
import "./index.css";
import configureStore from "./Spacexstore/store";
import { Provider } from "react-redux";
import { View } from "./Pages/LaunchesView";

let store = configureStore();

export const Page = () => (
  <React.StrictMode>
    <Provider store={store}>
      <View />
    </Provider>
  </React.StrictMode>
);

