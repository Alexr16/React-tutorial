import React, { PureComponent } from 'react';

class InputTodo extends PureComponent {
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

  render() {
    const { title } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="button">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
