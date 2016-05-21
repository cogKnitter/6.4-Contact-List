import React from 'react'
import {Link} from 'react-router'
import PreviewList from './PreviewList'


export default React.createClass({
  render() {
    return (
      <main>
        <h1 className="list__heading">My Peeps</h1>
        <div>
          <PreviewList/>
        </div>
      </main>
    )
  }
})
