import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Search from './components/Search';
import Main from './components/Main'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: undefined,
      currentCategory: 'now-playing'
    }
  }

  searchData = (e) => {
    e.preventDefault();
    fetch(`/api/search/all/${e.target.elements.q.value}/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list: data
      });
      console.log(this.state.list);
    })
  }

  discoverData = () => {
    this.setState({
      currentCategory: 'discover'
    });

    fetch(`/api/discover/movie/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list: data
      });
    })
  }

  nowPlayingData = () => {
    this.setState({
      currentCategory: 'now-playing'
    });

    fetch(`/api/movie/now_playing/1`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        list:data
      })
    })
  }

  componentDidMount() {
    this.nowPlayingData();
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Search getData={this.searchData}/>
      <Main
        passedData={this.state.list}
        currentCategory={this.state.currentCategory}
        getNowPlaying={this.nowPlayingData}
        getDiscover={this.discoverData}
      />
      </div>
    );
  }
}

export default App;
