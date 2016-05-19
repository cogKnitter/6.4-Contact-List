import React from 'react'


export default React.createClass({
  render() {
    return (
      <li className="contact__li">
        <img className="contact__image--preview" src={this.props.contact_image}/>
        <h2 className="contact__name--preview">{this.props.contact_name}</h2>
      </li>
    )
  }
})
