import React from 'react';

import { withStyles } from 'material-ui/styles';


const styles = theme => ({
	content: theme.content
});

const Content = (props) => {
	const { classes } = props;

	return (
		<div className="content">
			Content
		</div>
	);

};

export default Content;
