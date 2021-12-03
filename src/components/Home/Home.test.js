import { render } from '@testing-library/react';
import Home from './Home';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

test('input shows up', () => {
  const container = render(
    <>
      <Editor />
      <Preview />
    </>
  );
  expect(container).toMatchSnapshot();
});
