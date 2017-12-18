import React from 'react';
import { withStyles } from 'material-ui/styles';

import Item from './Item';

const styles = theme => ({
	root: {
		padding: '20px 50px',
		fontSize: '18px',
		fontWeight: '500',
		textAlign: 'right'
	},
	label: {
		display: 'inline-block',
		verticalAlign: 'top'
	},
	value: {
		display: 'inline-block',
		verticalAlign: 'top',
		width: '140px'
	},
	result: {
		paddingTop: '10px',
		fontSize: '24px'
	}
});

const Totals = props => {

	if (!props.items) return null;
	const {classes, items} = props;
	const {subtotal, discount, tax, total} = items;

	return (
		<ul className={classes.root}>
			<Item 
				label="Subtotal"
				value={subtotal}
				classes={classes}
			/>
			<Item 
				label="Discount"
				value={discount}
				classes={classes}
			/>
			<Item 
				label="Tax"
				value={tax}
				classes={classes}
			/>
			<Item 
				label="Total"
				value={total}
				classes={classes}
				result={true}
			/>
		</ul>
	);

};

export default withStyles(styles)(Totals);