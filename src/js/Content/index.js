import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';

import { mergeStyles } from '../../utils';

import TableBox from '../components/TableBox/';
import Totals from '../components/Totals/';

import Footer from './Footer';

const styles = theme => ({
	root: theme.content,
	outer: theme.outer,
	inner: mergeStyles(theme.inner, {
		padding: '0'
	})
});

class Content extends Component {

	render() {
		const {classes, items, totals, onDelete, currencySymbol} = this.props;
		const {subtotal, discount, tax, total} = totals;

		return (
			<div className={classes.root}>
				<div className={classes.outer}>
					<div className={classes.inner}>
						<TableBox 
							items={items}
							onDelete={onDelete}
							currencySymbol={currencySymbol}
						/>
						<Totals items={{
							subtotal: currencySymbol + subtotal,
							discount: (discount > 0 ? `(${currencySymbol + discount})` : currencySymbol + discount),
							tax: currencySymbol + tax,
							total: currencySymbol + total
						}} />
					</div>
					<Footer />
				</div>
			</div>
		);
	}
	
};

export default withStyles(styles)(Content);
