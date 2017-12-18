import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Item from './Item';

import { mergeStyles } from '../../utils';

const styles = theme => ({
	root: {
		height: '100%'
	},
	inner: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%'
	},
	top: {
		borderBottom: '5px solid rgba(235, 235, 235, 1)'
	},
	main: {
		overflow: 'auto',
		flex: '1 100%'
	},
	//table
	table: {
		tableLayout: 'fixed'
	},
	row: {
		height: 'auto',
		transition: 'background 0.225s',
		'&:hover': {
			background: '#eee'
		}
	},
	th: mergeStyles(theme.th, {
		padding: '10px 20px',
		fontSize: '18px',
		fontWeight: '500'
	}),
	cell: {
		verticalAlign: 'top',
		padding: '9px 20px 8px',
		height: 'auto',
		fontSize: '16px',
		cursor: 'pointer'
	},
});

class ServicePlan extends Component {

	render() {

		const {classes, items} = this.props;
		let {top, other} = items;
		top = items && top && top.length && this.buildItems(top);
		other = items && other && other.length && this.buildItems(other);

		return (
			<div className={classes.root}>
				<div className={classes.inner}>
					<div className={classes.top}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow className={classes.row}>
									<TableCell className={classes.th}>Plan Group</TableCell>
									<TableCell className={classes.th}>Service Plan</TableCell>
									<TableCell className={classes.th}>MRC</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{top}
							</TableBody>
						</Table>
					</div>
					<div className={classes.main}>
						<Table className={classes.table}>
							<TableBody>
								{other}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		);

	}

	buildItems = items => {
		const {classes, onRowClick} = this.props;

		return items.map(item => {
			const {id, ...other} = item;
			return <Item 
				{...other}
				key={id}
				classes={classes}
				onRowClick={onRowClick}
			/>;
		});
	}

}

export default withStyles(styles)(ServicePlan);
