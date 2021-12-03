import { render } from '@testing-library/react';
import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

test('Ensuring Editor & Preview feed into Home.js', () => {
  const container = render(
    <>
      <Editor />
      <Preview />
    </>
  );
  expect(container).toMatchSnapshot();
});
