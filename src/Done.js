import React from 'react';

class Done extends React.Component {
  render() {
    const { title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <button>Delete</button>
      </div>
    );
  }
}

export default Done;
