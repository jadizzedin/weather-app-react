import React from 'react';
import './App.css';
import Output from './components/Output'
import Form from './components/Form'
import apiCall from './data'

class App extends React.Component {
  state = {
    input: '77027',
    data: {}
  }

  componentDidMount = async () => {
    const data = await apiCall(this.state.input);
    console.log(data)
    this.setState(prevState => ({
      data: data
    }));
  };

  handleSubmit = async (input) => {
    await this.setState(prevState => ({
      input: input
    }));
    const data = await apiCall(this.state.input);
    this.setState(prevState => ({
      data: data
    }));
  };

  render () {
    return (
      <div className="App">
      <h1>Weather App</h1>
        <Form
        handleSubmit={this.handleSubmit}
        />
        <Output
        data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
