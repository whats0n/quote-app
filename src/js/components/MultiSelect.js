import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';

import Input from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

const styles = theme => ({
	root: theme.select,
	item: theme.menuItem,
	selected: theme.menuItemSelected
});

// const buildListItems = (props) => {
	
// 	const { array, ...other } = props;

// 	return array.map(item => {
// 		if (typeof item.children === 'object') {
// 			return (
// 				<ListItem button onClick={props.toggleOnClick} />
// 			);
// 		}
		
// 		return <ListItem button />
// 	});

// };

class ListBox extends Component {

	render() {
	
		const { title, children } = this.props;
		console.log(typeof children !== 'object');
		// { typeof children === 'object' && children.map(item => {
		// 	const { id, ...other } = item;
		// 	return <ListItem 
		// 		{ ...other }
		// 		button
		// 		key={ id }
		// 	/>
		// }) }
		return (
			<List>
				{ title && <ListItem button>{title}</ListItem> }
				{ typeof children !== 'object' && <ListItem button>{children}</ListItem> }
			</List>
		);

	}

};

const MultiSelect = props => {

	const { classes, name, id, children, ...other } = props;

	// const items = children.map((item) => {
	// 	const { id, ...other } = item;
		
	// 	if (typeof item.children === 'object') {
	// 		console.log('array');
	// 		return null;
	// 	}

	// 	return (
	// 		<ListItem 
	// 			{ ...other }
	// 			key={ id }
	// 			button
	// 		/>
	// 	);
	// });

	// return (
	// 	<List className={ classes.root } subheader={ <ListSubheader>Nested List Items</ListSubheader> }>
	// 		{ items }
	// 	</List>
	// );

	const items = children.map((item) => {
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


export default withStyles(styles)(MultiSelect);