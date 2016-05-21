import React from 'react'
import {Link} from 'react-router'


export default React.createClass({
  render() {
    console.log(this.props);
    return (
      <div>
      <h2><Link to="/"><i className="fa fa-arrow-left"/></Link></h2>
        <ul>
          <li className="detail__li"><i className="fa fa-user"/>{this.props.params.name}</li>
          <li className="detail__li"><i className="fa fa-envelope"/>{this.props.params.email}</li>
          <li className="detail__li"><i className="fa fa-mobile"/>{this.props.params.phone}</li>
          <li className="detail__li"><i className="fa fa-globe"/>{this.props.params.location}</li>
        </ul>

        </div>
    )
  }
})
