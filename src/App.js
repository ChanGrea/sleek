import React, { Component } from "react";

import "./App.scss";

class App extends Component {
  render() {
    return <div className="base">hello world</div>;
  }
}

App.propTypes = {
  // bla: PropTypes.string,
};

App.defaultProps = {
  // bla: 'test',
};

export default App;
