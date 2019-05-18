import React, { Component } from 'react';
import axios from 'axios';
import Commands from '../Commands';

const API_URL = 'http://localhost:9090/api';

export default class Main extends Component {
  state = {};
  componentDidMount() {
    axios(`${API_URL}/now`)
      .then(res => res.data)
      .then(data => {
        console.log('@debug-call-now', { data });
        this.setState({ data });
      });
  }
  render() {
    const { data } = this.state;
    console.log('@debug', { data });
    if (data) {
      const Action = Commands[data.action];
      return (
        <div>
          <Action {...data} />
        </div>
      );
    }
    return (
      <div>
        <h1>Waiting Your Commands...</h1>
      </div>
    );
  }
}
