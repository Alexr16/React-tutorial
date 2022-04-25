import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo } = props;
  return <li>{todo.title}</li>;
};

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
