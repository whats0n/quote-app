import React from 'react';
import Table from 'material-ui/Table';

import { withStyles } from 'material-ui/styles';

import Head from './Head';
import Body from './Body';

import { mergeStyles } from '../../../utils';

const styles = theme => {
	
	const close = {
		padding: '1px',
		width: '50px'
	};

	return {
		//common
		root: {
			tableLayout: 'fixed',
			border: 'none',
			borderCollapse: 'unset'
		},
		row: {
			height: 'auto'
		},
		//header
		thClose: mergeStyles(theme.th, close),
		thDefault: mergeStyles(theme.th, {
			padding: '10px',
			width: '20%',
			fontSize: '18px',
			fontWeight: '500',
			textAlign: 'center'
		}),
		//body
		tdClose: close,
		tdDefault: {
			verticalAlign: 'top',
			padding: '9px 10px 8px',
			width: '20%',
			height: 'auto'
		},
		//product item
		outer: {
			padding: '0 !important',
			borderBottom: '5px solid rgba(235, 235, 235, 1)'
		},
		inner: {
			tableLayout: 'fixed',
			border: 'none'
		}
	}
};

const TableBox = props => {

	const {items, classes, onDelete, currencySymbol} = props;
	const {thClose, thDefault, tdClose, tdDefault, outer, inner, row} = classes;
	const classList = {
		row: row,
		headers: [
			thClose,
			thDefault,
			thDefault,
			thDefault,
			thDefault,
			thDefault,
			thDefault
		],
		body: [
			tdClose,
			tdDefault,
			tdDefault,
			tdDefault,
			tdDefault,
			tdDefault,
			tdDefault
		],
		outer: outer,
		inner: inner
	};
	const headers = [ 
		{ id: 1 },
		{ id: 2, title: 'UPC' },
		{ id: 3, title: 'Description' },
		{ id: 4, title: 'Retail Price' },
		{ id: 5, title: 'Quantity' },
		{ id: 6, title: 'Discount' },
		{ id: 7, title: 'Ext. Price' },
	];

	return (
		<Table className={classes.root}>
			<Head 
				headers={headers}
				classList={classList}
			/>
			<Body 
				items={items}
				onDelete={onDelete}
				classList={classList}
				currencySymbol={currencySymbol}
			/>
		</Table>
	);

};

export default withStyles(styles)(TableBox);
