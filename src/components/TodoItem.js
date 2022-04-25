import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
  render() {
    const { todo } = this.props;
    return <li>{todo.title}</li>;
  }
}

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
