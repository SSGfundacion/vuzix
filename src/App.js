import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import Header from './Components/Header';


class App extends Component {
  render() {
    return (
        <div className="App">
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            position="bottom-left"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar/>
            {/* <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Hello</h1> */}
            <Header />
            <div className="container">
              {/* RUTAS COMUNES*/}

              {/*RUTAS CENTRALITA */}
              {/* <Route exact path="/" component={}/>
              <Route exact path="/" component={}/>
              <Route exact path="/" component={}/> */}


              {/*RUTAS DOCTOR  */}
              {/* <Route exact path="/" component={}/>
              <Route exact path="/" component={}/>
              <Route exact path="/" component={}/> */}

            </div>




        </div>

    );
  }
}

export default App;
