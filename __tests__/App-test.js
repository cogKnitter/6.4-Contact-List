// __tests__/CheckboxWithLabel-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../modules/App';

jest.unmock('../modules/App');

describe('App /', () => {

  it('contains My peeps', () => {
    // This places our component into our test to find off of
    var appRendered = TestUtils.renderIntoDocument(
      <App/>
    )
    // find h1 on page
    var heading = TestUtils.findRenderedDOMComponentWithClass(appRendered, "list__heading");
    // assert it has text
    expect(heading.textContent).toEqual("My Peeps");
  });
});
