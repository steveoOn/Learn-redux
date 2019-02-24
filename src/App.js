import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import LearnReduxPage from "./pages/learnRedux";
import SearchAPIPage from "./pages/learnSearchAPI";
import Navigation from "./components/Navigation";
import recipePage from "./pages/learnSearchAPI/recipePage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navigation />
            <Route path="/learn-redux" component={LearnReduxPage} />
            <Route path="/learn-search" component={SearchAPIPage} />
            <Route path="/learn-search/:id" component={recipePage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
