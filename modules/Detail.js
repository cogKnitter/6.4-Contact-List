import React from 'react'

export default React.createClass({
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li>{this.props.params.name}</li>
          <li>{this.props.params.email}</li>
          <li>{this.props.params.phone}</li>
          <li>{this.props.params.location}</li>
        </ul>
      </div>
    )
  }
})
