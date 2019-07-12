import React from 'react';

class InProgress extends React.Component {
  render() {
    const { todo, handleDone } = this.props;
    return (
      <div>
        <h2>{todo.title}</h2>
        <button onClick={() => handleDone(todo.id)}>Done</button>
      </div>
    );
  }
}

export default InProgress;
