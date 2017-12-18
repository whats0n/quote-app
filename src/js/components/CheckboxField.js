import React from 'react';
import { withStyles } from 'material-ui/styles';

import Checkbox from 'material-ui/Checkbox';

const styles = theme => ({
	default: theme.checkboxDefault,
	checked: theme.checkboxChecked,
});

const CheckboxField = props => {
	const {classes, ...other} = props;
	return <Checkbox 
		{...other}
		classes={{
			default: classes.default,
			checked: classes.checked
		}}
	/>
};

export default withStyles(styles)(CheckboxField);
