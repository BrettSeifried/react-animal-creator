import { render, screen } from '@testing-library/react';
import Preview from './Preview';

test('renders the Preview panel', () => {
  const container = render(
    <Preview head="dog" body="blue" legs="blue" catchPhrase="Hello World!" />
  );
  expect(container).toMatchSnapshot();
});

// test('empty preview', () => {
//     const container = render(
//         <Preview
//     )
// })
