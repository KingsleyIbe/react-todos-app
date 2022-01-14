import React, { Component } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  const { title } = this.state;

  handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle />
          </button>
      </form>
    );
  }
}

export default InputTodo;
