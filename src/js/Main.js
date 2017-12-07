import React from 'react';
import { withStyles } from 'material-ui/styles';

//components
import Sidebar from './Sidebar';
import Content from './Content';

const styles = theme => ({
	main: theme.main
});

const Main = props => {
	const { classes } = props;
	return (
		<div className={classes.main}>
			<Sidebar />
			<Content />
		</div>
	);
};

export default withStyles(styles)(Main);