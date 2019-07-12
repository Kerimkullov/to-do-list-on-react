import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const { items, handleDelete, handleStart } = this.props;
    return (
      <div className="todo-item">
        <h1>Todo List</h1>

        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              id={item.id}
              handleStart={() => handleStart(item.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default TodoList;
