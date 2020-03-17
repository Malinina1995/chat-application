import { Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { authThunkCreator } from '../reducers/authReducer';
import { Preloader } from '../Components/PreloaderComponent/Preloader';


export const authRedirect = (Component) => {
  
  let mapStateToRedirect = (state) => ({
    isAuth: state.auth.isAuth
  })
  class RedirectComponent extends React.Component {
    
    render() {
      if(!this.props.isAuth){
        return <Redirect to="/login"/>
      } 
      return <Component {...this.props} />
    }
  }

  let connectAuthRedirect = connect(mapStateToRedirect)(RedirectComponent);

  return connectAuthRedirect;
}

export const authRedirectAwaiter = (Component) => {
  
  let mapStateToRedirect = (state) => ({
    isAuth: state.auth.isAuth
  })
  class AuthRedirectAwaiter extends React.Component {
    componentDidMount() {
      this.props.authThunkCreator();
    }
    
    render() {
      if(this.props.isAuth === null){
        return <Preloader />
      } 
      return <Component {...this.props} />
    }
  }


  let connectAuthRedirect = connect(mapStateToRedirect, {authThunkCreator})(AuthRedirectAwaiter);

  return connectAuthRedirect;
}