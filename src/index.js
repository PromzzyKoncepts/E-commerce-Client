import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider } from "./context/userContext";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";


let persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <PersistGate persistor={persistor}>
               <UserProvider>
                  <App />
               </UserProvider>
            </PersistGate>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
