import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  return (
    <li className={styles.item}>
      <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} className={styles.checkbox} />
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>Delete</button>
      <span style={todo.completed ? completedStyle : null} />
      {todo.title}
    </li>
  );
};

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
