import { Provider } from "react-redux";

import "./App.css";
import Header from "./components/header";
import Products from "./components/products";

import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Products />
    </Provider>
  );
};

export default App;
