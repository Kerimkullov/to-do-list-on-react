import React from 'react';

class TodoItem extends React.Component {
  render() {
    const { title, handleDelete, handleStart, id } = this.props;
    return (
      <div
        className="todo-item"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <h1 style={{ padding: '0 10px' }}>{title}</h1>
        <button style={{ margin: '0 10px' }} onClick={() => handleStart(id)}>
          start
        </button>
        <button onClick={handleDelete}>x</button>
      </div>
    );
  }
}

export default TodoItem;
