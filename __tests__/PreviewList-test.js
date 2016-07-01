// __tests__/CheckboxWithLabel-test.js
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PreviewList from '../modules/PreviewList';

jest.unmock('../modules/PreviewList');

describe('PreviewList', () => {

  it('contains an unorderder list', () => {
    // This places our component into our test to find off of
    var listRendered = TestUtils.renderIntoDocument(
      <PreviewList/>
    )
    // find text within list
    var list = TestUtils.findRenderedDOMComponentWithClass(listRendered, "contacts__list");
    // assert it has text
    expect(list.textContent).toBeDefined();
  });
});
