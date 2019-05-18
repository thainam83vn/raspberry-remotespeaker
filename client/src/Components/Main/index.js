import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:9090/api';

export default class Main extends Component {
  state = {};
  async componentDidMount() {
    const data = (await axios(`${API_URL}/now`)).data;
    this.setState({ ...data });
  }
  render() {
    const { data } = this.state;
    console.log('@debug', { data });
    if (data) {
      return <div>{data}</div>;
    }
    return (
      <div>
        <h1>Waiting Your Commands...</h1>
      </div>
    );
  }
}
