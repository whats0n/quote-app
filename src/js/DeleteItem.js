import React from 'react';
import { withStyles } from 'material-ui/styles';

import Dialog, { 
	DialogActions, 
	DialogContent,
	DialogContentText,
	DialogTitle 
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

const styles = theme => ({
	button: theme.button,
	box: {
		padding: '0 20px 20px',
		margin: 0
	}
});

const DeleteItem = props => {
	const {classes, onCancel, onSubmit, open} = props;
	return (
		<Dialog
			open={open}
			onRequestClose={onCancel}
		>
			<DialogTitle>Alert</DialogTitle>
			<DialogContent>
				<DialogContentText>Deleting this item also deletes the payment associated with it.</DialogContentText>
			</DialogContent>
			<DialogActions className={classes.box}>
				<Button 
					raised
					data-color="red"
					onClick={onCancel} 
					className={classes.button}
				>
					Cancel
				</Button>
				<Button 
					raised
					autoFocus
					data-color="primary"
					onClick={onSubmit} 
					className={classes.button}
				>
					Delete Item
				</Button>
			</DialogActions>
		</Dialog>
	);

};

export default withStyles(styles)(DeleteItem);
