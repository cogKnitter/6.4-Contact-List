import React from 'react'
import {Link} from 'react-router'


export default React.createClass({
  getDefaultProps() {
    return{
      contacts: [
        {
          contact_name: "Ernest Warren",
          contact_image: "../images/anon_avatar.png",
          contact_email: "ernest.warren10@example.com",
          contact_phone: "(274)-384-7798",
          contact_location: "6541 Constitution St"
        },{
          contact_name: "Sherry Crawford",
          contact_image: "../images/anon_avatar.png",
          contact_email: "sherry.crawford44@example.com",
          contact_phone: "(337)-271-9041",
          contact_location: "2711 Sixth St"
        },{
          contact_name: "Annie Rogers",
          contact_image: "../images/anon_avatar.png",
          contact_email: "annie.rogers73@example.com",
          contact_phone: "(226)-415-8720",
          contact_location: "3102 Prospect Rd"
        },{
          contact_name: "Oliver Armbrüster",
          contact_image: "../images/anon_avatar.png",
          contact_email: "oliver.armbruster64@example.com",
          contact_phone: "(255)-133-1873",
          contact_location: "8470 Karen Dr"
        }
      ]

    }
  },

  render() {
    return (
      <ul className="contacts__list">
        {this.props.contacts.map(function(contact, i){
          return <li key={i} className="contact__li">
            <Link to={`/Detail/${contact.contact_name}/${contact.contact_email}/${contact.contact_phone}/${contact.contact_location}`}>
              <img className="contact__image--preview" src={contact.contact_image}/>
              <h2 className="contact__name--preview">{contact.contact_name}</h2>
            </Link>
          </li>
        })}
      </ul>
    )
  }
})
