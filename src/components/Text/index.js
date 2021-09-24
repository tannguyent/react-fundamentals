import styled from 'styled-components';
import { color, typography, space, layout, variant } from 'styled-system';
import PropTypes from 'prop-types';
import css from '@styled-system/css';

import { texts } from '../../theme/variants';

const Text = styled.p(
	css({
		fontFamily: 'body',
		fontWeight: 'normal',
		lineHeight: 'body',
		margin: 0,
	}),
	variant({ 
        prop: 'type',
        scale: 'texts'
    }),
	color,
	typography,
	space,
	layout
);

Text.propTypes = {
	type: PropTypes.oneOf(Object.keys(texts)),
	children: PropTypes.node,
};

Text.defaultProps = {
	type: 'dark',
};

export default Text;