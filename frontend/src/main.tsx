import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import AuthLayout from "./lib/AuthLayout.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthLayout>

      
      <App />
      </AuthLayout>
    </Provider>
  </React.StrictMode>
);
