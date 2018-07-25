import React, { Component } from 'react';
import './App.css';

export default class headerComponent extends Component {
    render() {
        return (
            <header className="App-header">
            <div className="row">
                <div className=" col-12 col-sm-4 col-md-3 offset-md-2">
                    <h1 className="App-title">Play Videos</h1>
                </div>
                <div className="col-12 col-sm-4 col-md-2">
                    <input type="text" id="usr" className="form-control" value=""/>
                </div>
                <div className="col-12 col-sm-2 col-md-2">
                  <button type="button" className="btn btn-orange" id="searchButton">
                    <i className="fas fa-question-circle"></i>Search
                  </button>
                </div>
                <div className="col-12 col-sm-2 col-md-2">
                    <img id="page-spinner" src="/spin-logo.gif" alt="Spinner"/>
                </div>
            </div>
            </header>
        );
      }
} 