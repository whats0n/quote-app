import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
	root: theme.footer,
	button: theme.button
});

const Footer = props => {
	const {classes} = props;
	return (
		<div className={classes.root}>
			<Button 
				raised 
				data-color="green"
				className={classes.button}>Add to Quote</Button>
		</div>
	)
};

export default withStyles(styles)(Footer);
