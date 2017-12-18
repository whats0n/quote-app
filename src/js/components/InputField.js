import React from 'react';
import { withStyles } from 'material-ui/styles';

import Input from 'material-ui/Input';

const styles = theme => ({
	root: theme.input,
});

const InputField = props => {
	const {classes, ...other} = props;
	return <Input 
		{...other}
		className={props.className || classes.root}
	/>

};

export default withStyles(styles)(InputField);
