// __tests__/CheckboxWithLabel-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Detail from '../modules/Detail';

jest.unmock('../modules/Detail');

describe('Detail', () => {

  it('contains the name of selected contact', () => {
    // This places our component into our test to find off of
    var testParams ={
      name: "Sasquatch"
    }
    var nameRendered = TestUtils.renderIntoDocument(
      <Detail params={testParams}/>
    )
    // find text within list
    var detailName = TestUtils.findRenderedDOMComponentWithClass(nameRendered, "detail__name");
    // assert it has text
    expect(detailName.textContent).toEqual("Sasquatch");
  });
});
