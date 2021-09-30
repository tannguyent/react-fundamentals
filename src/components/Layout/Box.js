import styled from 'styled-components';
import { space, color, border, layout, flexbox, grid, position } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Box = styled.div(
	{
		boxSizing: 'border-box',
	},
	space,
	color,
	border,
	layout,
	position,
	flexbox,
	grid
);

Box.propTypes = {
	...propTypes.space,
	...propTypes.color,
	...propTypes.border,
	...propTypes.layout,
	...propTypes.position,
	...propTypes.flexbox,
	...propTypes.grid,
};

export default Box;