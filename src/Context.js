import React, { Component } from 'react';
import data from './data';

const ToolContext = React.createContext();

class ToolProvider extends Component {
state = {
    tools: data
}

getTool = (slug) => {
    let tempTools = [...this.state.tools];
    const tool = tempTools.find(tool => tool.slug === slug);
    return tool;
}

  render() {
    return (
      <ToolContext.Provider value={{getTool: this.getTool}} >
        {this.props.children}
      </ToolContext.Provider>
    )
  }
}

const ToolConsumer = ToolContext.Consumer;

export {ToolProvider, ToolConsumer, ToolContext};
