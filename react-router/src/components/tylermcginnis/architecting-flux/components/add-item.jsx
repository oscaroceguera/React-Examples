import React from 'react';
import ReactDOM from 'react-dom';

let AddItem = React.createClass({
  handleSubmit(e){
    if(e.keyCode === 13){
      let newItem = ReactDOM.findDOMNode(this.refs.newItem).value;
      ReactDOM.findDOMNode(this.refs.newItem).value = '';
      this.props.add(newItem);
    }
  },
  render: function(){
    return (
      <div>
        <input type="text" ref="newItem" className="form-control" placeholder="New Item" onKeyDown={this.handleSubmit}  />
      </div>
    )
  }
});

export default AddItem;
