import React from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from '../../styles/TodoItem.module.css';

class TodoItem extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    alert('Todo item deleted successfully!');
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const viewMode = {};
    const editMode = {};

    const { editing } = this.state;

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { completed, id, title } = this.props.todo;
    const { handleChangeProps, deleteTodoProps, setUpdate } = this.props;

    return (
      <li className={styles.item}>
        <div onDoubleClick={() => this.handleEditing()} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <button type="submit" onClick={() => deleteTodoProps(id)}>
            {' '}
            <FaTrash className="faTrash" />
          </button>
          <span
            style={completed ? completedStyle : null}
          >
            {title}

          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}

export default TodoItem;
