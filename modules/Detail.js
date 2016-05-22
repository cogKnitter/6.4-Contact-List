import React from 'react'
import {Link} from 'react-router'


export default React.createClass({
  render() {
    return (
      <div>
        <div className="detail__head">
          <h2><Link to="/"><i className="fa fa-arrow-left"/></Link></h2>
          <img className="detail__img" src="../../../../images/anon_avatar.png"/>
        </div>
          <ul className="detail__items">
            <li className="detail__li"><i className="fa fa-user"/>{this.props.params.name}</li>
            <li className="detail__li"><i className="fa fa-envelope"/>{this.props.params.email}</li>
            <li className="detail__li"><i className="fa fa-mobile"/>{this.props.params.phone}</li>
            <li className="detail__li"><i className="fa fa-globe"/>{this.props.params.location}</li>
          </ul>
      </div>
    )
  }
})
