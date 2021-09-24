import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from '@styled-system/css';

export default styled(NavLink)(
  css({
    py: 3,
    px: 5,
    m: 3,
    display: 'inline-flex',
    textDecoration: 'none',
    border: '2px solid',
    borderRadius: 'base', 
    outline: 0,
    cursor: 'pointer',
    color: 'blue', 
    borderColor: 'blue',
    fontWeight: 'bold',

    '&:hover:not(:disabled), &:active:not(:disabled), &:focus, &.active': {
			backgroundColor: 'blue',
      color: 'white'
		}
  })
)