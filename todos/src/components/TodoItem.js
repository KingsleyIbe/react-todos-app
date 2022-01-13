import React from 'react';
// import TodoContainer from './TodoContainer';

class TodoItem extends React.PureComponent {
  render() {
    return (
      <div>
      <input
        type="checkbox"
        checked={this.props.todo.completed}
        onChange={() => this.props.handleChangeProps(this.props.todo.id)}
/>
<button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
</div>
    );
  }
}

export default TodoItem;
