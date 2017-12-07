import React from 'react';
import { withStyles } from 'material-ui/styles';

import { InputLabel } from 'material-ui/Input';

const styles = theme => ({
	root: theme.inputLabel,
	focused: theme.inputLabelFocused
});

const CustomInputLabel = props => {
	const { classes, ...other } = props;
	return <InputLabel 
		{...other}
		FormControlClasses={{
			focused: classes.focused,
			root: classes.root
		}}
	/>

};

export default withStyles(styles)(CustomInputLabel);
