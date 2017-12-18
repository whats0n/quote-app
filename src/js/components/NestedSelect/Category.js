import React, { Component } from 'react';

import Button from 'material-ui/Button';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItem } from 'material-ui/List';

class Category extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: this.props.open
		};
	}

	toggle = e => {
		e.preventDefault();
		this.setState({ open: !this.state.open });
	}

	render() {
		
		const {open} = this.state;
		const {classes, title, children} = this.props;

		return (
			<ListItem className={classes.item}>
				<Button 
					className={classes.title}
					onClick={this.toggle}
					data-active={open}
				>
					{title}
					{open ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
				</Button> 
				<Collapse 
					component="div" 
					in={open} 
					timeout="auto" 
					unmountOnExit
					className={classes.category}
				>
					<List className={classes.list}>
						{children}
					</List>
				</Collapse>
			</ListItem>
		);

	}

};

export default Category;