import React from 'react'
import Preview from './Preview'

export default React.createClass({
  getDefaultProps() {
    return{
      contacts: [
        {
          contact_name: "Denise De Snaijer",
          contact_image: "../images/anon_avatar.png"
        },{
          contact_name: "Jadran Lannon",
          contact_image: "../images/anon_avatar.png"
        },{
          contact_name: "Dotty Brandt",
          contact_image: "../images/anon_avatar.png"
        },{
          contact_name: "Oliver Armbrüster",
          contact_image: "../images/anon_avatar.png"
        }
      ]

    }
  },

  render() {
    return (
      <ul className="contacts__list">
        {this.props.contacts.map(function(contact, i){
          return <Preview key={i} contact_name={contact.contact_name} contact_image={contact.contact_image}/>
        })}
      </ul>
    )
  }
})
