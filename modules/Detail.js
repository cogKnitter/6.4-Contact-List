import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    console.log(this.props);
    return (
      <div>
      <h2><Link to="/">&#65513;</Link></h2>
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
