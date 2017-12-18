import React from 'react';
import { withStyles } from 'material-ui/styles';

//components
import Sidebar from './Sidebar/';
import Content from './Content/';

const styles = theme => ({
	root: theme.main
});

const Main = props => {
	const {classes, toggleModalOnClick, servicePlan, planOptions, items, totals, onDelete, currencySymbol} = props;
	return (
		<div className={classes.root}>
			<Sidebar 
				servicePlan={servicePlan}
				planOptions={planOptions}
				toggleModalOnClick={toggleModalOnClick}
			/>
			<Content  
				items={items}
				totals={totals}
				currencySymbol={currencySymbol}
				onDelete={onDelete}
			/>
		</div>
	);
};

export default withStyles(styles)(Main);