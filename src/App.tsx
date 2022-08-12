import React from "react";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { persistor, store } from "@/Store";
import ApplicationNavigation from "./Navigator/Application";

const app = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationNavigation />
    </PersistGate>
  </Provider>
)

export default app;