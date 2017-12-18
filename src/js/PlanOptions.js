import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import CheckboxField from './components/CheckboxField';

import { mergeStyles } from '../utils';

const styles = theme => ({
	root: {
		height: '100%'
	},
	inner: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%'
	},
	main: {
		overflow: 'auto',
		flex: '1 100%'
	},
	footer: {
		padding: '20px',
		textAlign: 'right'
	},

	button: theme.button,

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
	thCheckbox: mergeStyles(theme.th, {
		padding: '10px 20px',
		width: '16%',
		fontSize: '18px',
		fontWeight: '500'
	}), 
	cell: {
		verticalAlign: 'top',
		padding: '15px 20px 15px',
		height: 'auto',
		fontSize: '16px',
		lineHeight: '20px'
	},
	cellCheckbox: {
		verticalAlign: 'top',
		padding: '1px 20px',
		width: '16%',
		height: 'auto'
	}
});

class PlanOptions extends Component {

	constructor(props) {
		super(props);
		this.state = { checked: this.props.checked };
	}

	handleChange = event => {
		const value = event.target.value;

		this.setState({
			checked: {
				...this.state.checked,
				[value]: !this.state.checked[value]
			}
		});
	}

	hanldeSubmit = event => {
		event.preventDefault();
		this.props.onSubmit && this.props.onSubmit(this.state.checked);
	}

	render() {

		const {classes, items} = this.props;
		const {checked} = this.state;
		const body = items && items.length && items.map(item => {
			const {id, name, mrc} = item;
			return (
				<TableRow 
					key={id}
					className={classes.row}
				>
					<TableCell className={classes.cellCheckbox}>
						<CheckboxField 
							value={id}
							checked={checked[id]}
							onChange={this.handleChange}
						/>
					</TableCell>
					<TableCell className={classes.cell}>{name}</TableCell>
					<TableCell className={classes.cell}>{mrc}</TableCell>
				</TableRow>
			);
		});

		return (
			<div className={classes.root}>
				<form 
					action="/" 
					className={classes.inner}
					onSubmit={this.hanldeSubmit}
				>
					<div className={classes.main}>
						<Table className={classes.table}>
							<TableHead>
								<TableRow className={classes.row}>
									<TableCell className={classes.thCheckbox}>Check To Add</TableCell>
									<TableCell className={classes.th}>Plan Option</TableCell>
									<TableCell className={classes.th}>MRC</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{body}
							</TableBody>
						</Table>
					</div>
					<div className={classes.footer}>
						<Button 
							raised 
							type="submit"
							data-color="primary"
							className={classes.button}
						>Done</Button>
					</div>
				</form>
			</div>
		);

	}

}

export default withStyles(styles)(PlanOptions);
