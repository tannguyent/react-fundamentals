import { Link } from 'react-router-dom';
import styled from 'styled-components';
import css from '@styled-system/css';

export default styled(Link)(
  css({
    py: 3,
    px: 5,
    m: 3,
    display: 'inline-flex',
    textDecoration: 'none',
    outline: 0,
    cursor: 'pointer',
    color: 'gray900', 

    '&:hover:not(:disabled), &:active:not(:disabled), &:focus, &.active': {
      color: 'blue'
		}
  })
)