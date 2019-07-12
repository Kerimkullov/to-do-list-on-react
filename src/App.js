import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import uuid from 'uuid';
import InProgress from './InProgress';
import Done from './Done';

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    inProgress: [],
    done: []
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: '',
      id: uuid()
      // editItem: false
    });
    document.getElementById('addBtn').value = '';
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(items => items.id !== id);
    this.setState({ items: filteredItems });
  };
  handleStart = id => {
    const updateList = this.state.items.filter(elem => elem.id === id);
    const inProgress = [...this.state.inProgress, updateList[0]];
    this.setState({
      inProgress: inProgress
    });
    const item = this.state.items.filter(items => items.id !== id);
    this.setState({ items: item });
    // console.log(n);
  };
  handleDone = id => {
    const { inProgress, done } = this.state;
    const newInProgress = inProgress.filter(elem => elem.id !== id);
    const newDone = inProgress.find(elem => elem.id === id);
    const newDoneList = [...done, newDone];
    this.setState({
      ...this.state,
      done: newDoneList,
      inProgress: newInProgress
    });
  };
  render() {
    const { inProgress } = this.state;
    return (
      <div>
        <h1 className="app-title">MY LIST</h1>
        <h1>Todo Input</h1>
        <AddTodo
          item={this.state.addItem}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          items={this.state.items}
          clearlist={this.clearlist}
          handleDelete={this.handleDelete}
          handleStart={this.handleStart}
        />
        <div>
          <h1>In Progress</h1>
          {inProgress.map(item => {
            return (
              <InProgress
                key={item.id}
                todo={item}
                handleDone={this.handleDone}
              />
            );
          })}
        </div>
        <div>
          <h1>Done</h1>
          {this.state.done.map(item => {
            return <Done key={item.id} title={item.title} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
