import React, { Component } from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { authAPI } from "../../api/api";

import { authThunkCreator, logoutThunkCreator } from '../../reducers/authReducer';

class Container extends Component {
  componentDidMount() {
    this.props.authThunkCreator();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export let HeaderContainer = connect(mapStateToProps, {authThunkCreator, logoutThunkCreator})(Container);
