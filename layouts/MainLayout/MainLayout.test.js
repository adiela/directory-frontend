import React from 'react';
import renderer from 'react-test-renderer';
import IndexPage from "pages/index"

test('Layout displays properly', () => {
    const component = renderer.create(<IndexPage />,);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});