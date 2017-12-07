import React from 'react';
import { withStyles } from 'material-ui/styles';

import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

const styles = theme => ({
	root: theme.select,
	item: theme.menuItem,
	selected: theme.menuItemSelected
});

const SelectList = props => {

	const { classes, name, id, options, ...other } = props;

	const items = options.map((item) => {
		const { id, ...other } = item;
		return <MenuItem 
			{ ...other }
			key={ id }
			classes={{
				root: classes.item,
				selected: classes.selected
			}}
		/>;
	});

	return <Select
		{ ...other }
		className={ classes.root }
		input={ <Input name={ name } id={ id } /> }
		children={ items }
	/>;

};

export default withStyles(styles)(SelectList);