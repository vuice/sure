import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Link, List, ListItem, ListItemText } from '@mui/material';

type TNavBar = {
  links: {
    'data-testid'?: string;
    href: string;
    text: string;
  }[];
};

const listStyle = {
  width: '100%',
} as const;
const listItemStyle = {
  color: '#fff',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'center',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:not(:last-of-type)': {
    marginBottom: '4px',
  },
  '&.Mui-selected': {
    backgroundColor: '#f00',
  },
} as const;

function NavBar({ links }: TNavBar) {
  const location = useLocation()

  return (
    <Box
      component='aside'
      sx={{
        alignItems: 'center',
        background: '#0c2975',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        width: '200px',
      }}
    >
      <Link
        component={RouterLink}
        sx={{ cursor: 'pointer', marginBottom: '80px', marginTop: '40px' }}
        to='/'
      >
        <img alt="logo" src="/surelogo.svg" />
      </Link>
      <List role='menu' sx={listStyle}>
        {links.map(({ text, href, 'data-testid': dataTestId }) => (
          <ListItem
            aria-label={href === location.pathname ? 'page' : ''} // TODO: Figure out aria-current fix
            component={RouterLink}
            data-testid={dataTestId}
            key={href}
            role='menuitem'
            selected={href === location.pathname}
            sx={listItemStyle}
            to={href}
          >
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default NavBar;
