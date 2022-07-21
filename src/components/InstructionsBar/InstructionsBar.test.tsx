import { fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test';
import InstructionsBar from './InstructionsBar';

describe('InstructionsBar', () => {
  const defaultProps = {
    onClick: jest.fn(),
  };

  it('should render a "View challenges" button', () => {
    const { getByText } = renderWithProviders(<InstructionsBar {...defaultProps} />);
    expect(getByText('View challenges')).toBeInTheDocument();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const { getByRole } = renderWithProviders(<InstructionsBar {...defaultProps} />);
    fireEvent.click(getByRole('button'));
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
