import React from 'react';
import Footer from '.';

it('should render a Footer component', () => {
  const tree = <Footer />;
  expect(tree).toMatchSnapshot();
});