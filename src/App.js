import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
		// Wraps the entire app with the PhotoContextProvider to provide access to the shared photo context
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
		  {/* // Renders the Header component and passes the handleSubmit function and history object as props */}
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
			{/* // Sets the default route to "/mountain" and redirects to it when the root path is accessed */}
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />

				{/* // Renders the Item component with a searchTerm of "mountain" when the "/mountain" path is accessed */}

              <Route
                path="/mountain"
                render={() => <Item searchTerm="mountain" />}
              />

				{/* // Renders the Item component with a searchTerm of "beach" when the "/beach" path is accessed */}
              <Route path="/beach" render={() => <Item searchTerm="beach" />} />
			  	{/* // Renders the Item component with a searchTerm of "bird" when the "/bird" path is accessed */}
              <Route path="/bird" render={() => <Item searchTerm="bird" />} />
			  	{/* // Renders the Item component with a searchTerm of "food" when the "/food" path is accessed */}
              <Route path="/food" render={() => <Item searchTerm="food" />} />

			  {/* // Renders the Search component with the searchInput parameter from the URL path when the "/search/:searchInput" path is accessed */}
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
			  {/* // Renders the NotFound component when no other routes match */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
