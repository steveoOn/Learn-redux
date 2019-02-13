import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import LearnReduxPage from "./pages/learnRedux";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route path="/learn-redux" component={LearnReduxPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
