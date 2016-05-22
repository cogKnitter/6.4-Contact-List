// __tests__/CheckboxWithLabel-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Detail from '../modules/Detail';

jest.unmock('../modules/Detail');

describe('Detail', () => {

  it('contains a list of details', () => {
    // This places our component into our test to find off of

    var listRendered = TestUtils.renderIntoDocument(
      <Detail/>
    )
    // find text within list
    var list = TestUtils.findRenderedComponentWithType(listRendered, Detail);
    // assert it has text
    expect(list.props.params).toBeDefined();
  });
});
