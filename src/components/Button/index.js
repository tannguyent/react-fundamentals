import css from '@styled-system/css';
import { variant } from 'styled-system';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ButtonComponent from './Button'
import { buttons } from '../../theme/variants';

const Button = styled(ButtonComponent)(
	css({
		px: 4,
		py: 3,
		fontSize: 'm',
		fontFamily: 'body',
		textDecoration: 'none',
		boxSizing: 'border-box',
		display: 'inline-block',
		textAlign: 'center',
		border: 'thin',
		borderRadius: 'base',

		'&:hover:not(:disabled), &:active:not(:disabled), &:focus': {
			outline: 0,
			filter: 'saturate(60%)',
			cursor: 'pointer',
		},

		'&:disabled': {
			opacity: 0.6,
			filter: 'saturate(60%)',
		},
	}),
	variant({ 
        prop: 'type',
        scale: 'buttons'
    })
);

Button.propTypes = {
	type: PropTypes.oneOf(Object.keys(buttons)),
	disabled: PropTypes.bool,
	children: PropTypes.node.isRequired,
};

Button.defaultProps = {
	type: 'primary',
};

export default Button;