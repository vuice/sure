import NavBar from './NavBar';
import { renderWithProviders } from '../../utils/test';

describe('NavBar', () => {
  const defaultProps = {
    links: [
      { text: 'Link1', href: '/link1' },
      { text: 'Link2', href: '/link2' },
      { text: 'Link3', href: '/link3' },
    ],
  };

  it('should render NavBar links', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText('Link1')).toBeInTheDocument();
    expect(getByText('Link2')).toBeInTheDocument();
    expect(getByText('Link3')).toBeInTheDocument();
  });

  it('should render an `href` attribute for each link', () => {
    const { getByText } = renderWithProviders(<NavBar {...defaultProps} />);

    expect(getByText(defaultProps.links[0].text).closest('a')).toHaveAttribute('href', defaultProps.links[0].href);
    expect(getByText(defaultProps.links[1].text).closest('a')).toHaveAttribute('href', defaultProps.links[1].href);
    expect(getByText(defaultProps.links[2].text).closest('a')).toHaveAttribute('href', defaultProps.links[2].href);
  });
});
