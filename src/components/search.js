import React from 'react';

export default class search extends React.Component {

  render() {
    var shown = {
      display: this.props.isLoaded ? "block" : "none"
    };
    return (
      <header className="App-header">
      <div className="row">
        <div id="content" className="col-12 col-sm-4 col-md-2">
          <h1>
            <span className="you">You</span>
            <span className="tube">Tube</span>
          </h1>
        </div>
        <div className="col-12 col-sm-4 col-md-6">
          <input className="form-control" value={this.props.searchInput} onChange={this.props.handleChange}/>
        </div>
        <div className="col-12 col-sm-2 col-md-2">
          <button type="button" className="btn btn-orange" id="searchButton" onClick={this.props.handleSearch}>
            <i className="fa fa-search"></i>Search
          </button>
        </div>
        <div style={shown} className="col-12 col-sm-2 col-md-2">
            <img id="page-spinner" src="/spin-logo.gif" alt="Spinner"/>
        </div>
      </div>
      </header>
    );
  }
}