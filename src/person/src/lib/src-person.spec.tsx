import { render } from '@testing-library/react';

import SrcPerson from './src-person';

describe('SrcPerson', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SrcPerson />);
    expect(baseElement).toBeTruthy();
  });
});
