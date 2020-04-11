import React, { PureComponent } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import Layout from './hoc/Layout';
import LoginPage from './containers/LoginPage';

class App extends PureComponent {
  state = {}

  componentDidMount() {
    this.props.onTryAutoLogin();
  }

  render() {

    let routes = (
      <LoginPage />
    )
    
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={Layout} />
          <Redirect to="/" />
        </Switch>
      )
    }

    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const authReducer = state.get("authReducer");
  return {
    isAuthenticated: authReducer.get("isAuthenticated"),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoLogin: () => dispatch(actions.checkAuthState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
