import React from 'react';

class Form extends React.Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    let input = e.target.value
    this.setState(prevState => ({
      input: input
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.input);
  }

  render() {
    return (
      <form
      onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          placeholder='Enter a city or zip code'
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Search'
        />
      </form>
    );
  };
};

export default Form;
