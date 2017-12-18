import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import { mergeStyles } from '../../utils';

const styles = theme => ({
	root: theme.footer,
	button: mergeStyles(theme.button, {
		marginLeft: '20px'
	}),
	buttonClose: mergeStyles(theme.button, {
		float: 'left'
	})
});

const Footer = props => {
	const {classes} = props;
	return (
		<div className={classes.root}>
			<Button 
				raised 
				data-color="red"
				className={classes.buttonClose}>Close</Button>
			<Button 
				raised 
				data-color="primary"
				className={classes.button}>Print</Button>
			<Button 
				raised 
				data-color="primary"
				className={classes.button}>Preauthorize</Button>
			<Button 
				raised 
				data-color="primary"
				className={classes.button}>Load to POS</Button>
		</div>
	)
};

export default withStyles(styles)(Footer);
