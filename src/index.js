import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTodos from "./ListTodos";
import ListNamesPage from "./ListNamesPage";
import {createStore} from 'redux'
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers";

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <BrowserRouter>
     <Provider store={store}>
      <App />
      <Routes>
        <Route path="/" element={<ListNamesPage />} />
        <Route path="/ListTodos/:listID" element={<ListTodos />} />
      </Routes>
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);
