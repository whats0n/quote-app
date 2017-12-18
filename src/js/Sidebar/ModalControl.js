import React from 'react';
import { withStyles } from 'material-ui/styles';

import { mergeStyles } from '../../utils';

const styles = theme => ({
	root: theme.inputLabel,
	label: {
		paddingRight: '15px'
	},
	value: mergeStyles(theme.link, {
		display: 'inline-block',
		padding: '10px 0',
		fontSize: '16px',
		cursor: 'pointer'
	}),
});

const ModalControl = props => {
	const {classes, modal, onClick, label, value} = props;
	return (
		<div className={classes.root}>
			<span className={classes.label}>{label}:</span>
			<a 
				data-modal={modal} 
				className={classes.value}
				onClick={onClick}
			>{value}</a>
		</div>
	)
};

export default withStyles(styles)(ModalControl);
