import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends PureComponent {
  render() {
    const { todos, handleChangeProps } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleChangeProps={handleChangeProps} />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todos: PropTypes.array.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodosList;
