import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

import Category from './Category';
import SearchField from './SearchField';

import { colors } from '../../../constants';
import { mergeStyles } from '../../../utils';

const styles = theme => ({
	root: theme.select,
	item: {
		flexDirection: 'column',
		padding: 0,
		minWidth: '260px',
		textAlign: 'left',
		outline: 'none !important'
	},
	visible: {
		paddingLeft: '16px',
		paddingRight: '16px',
		margin: '0 -16px'
	},
	dropdown: {
		maxHeight: '300px'
	},
	menuItemRoot: {
		paddingLeft: '24px'
	},
	menuItemSelected: theme.menuItemSelected,
	category: {
		width: '100%'
	},
	title: {
		justifyContent: 'left',
		paddingTop: '14px',
		paddingRight: '32px',
		paddingBottom: '14px',
		width: '100%',
		fontSize: '16px',
		fontWeight: '500',
		textAlign: 'left',

		'&[data-active="true"]': {
			background: '#ccc'
		}
	},
	icon: {
		position: 'absolute',
		top: '50%',
		right: '10px',
		transform: 'translate3d(0,-50%,0)'
	},
	list: {
		padding: 0,
		borderBottom: `1px solid ${colors.darkGray}`,
		width: '100%',
		background: 'rgb(229, 229, 229)'
	},
	formControl: theme.formControl, 
	searchInput: mergeStyles(theme.input, {
		paddingRight: '24px'
	}),
	search: {
		padding: '0 16px 16px',
		outline: 'none !important'
	},
	searchIcon: {
		position: 'absolute',
		right: 0,
		bottom: '3px',
		pointerEvents: 'none'
	},
	arrow: {
		position: 'absolute',
		top: '12px',
		right: '16px'
	}
});

class NestedSelect extends Component {

	state = {
		anchorEl: null,
		open: false,
		activeItem: null,
		activePath: null,
		search: ''
	}

	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null,
			open: false,
			activeItem: props.Multiple ? [] : null,
			activePath: props.Multiple ? [] : null,
			search: ''
		}
	}


	handleClickListItem = e => this.setState({ open: true, anchorEl: e.currentTarget })

	handleMenuItemClick = (e, id, item) => {
		if (this.props.Multiple) {

			let {activePath, activeItem} = this.state;
			activePath = [...activePath];
			activeItem = [...activeItem];

			if (activePath.some(path => path === id)) {
				activePath = activePath.filter(item => item !== id);
				activeItem = activeItem.filter(item => item.path !== id);
			} else {
				activePath.push(id);
				activeItem.push(item);
			}

			this.setState({
				activePath: activePath,
				activeItem: activeItem
			});
			
		} else {
			this.setState({ 
				activePath: id, 
				activeItem: item,
				open: false
			});
		}
	}

	handleRequestClose = () => this.setState({ open: false })

	onSearchInput = e => this.setState({ [e.target.name]: e.target.value })

	renderNestedList = (items, parentId) => {

		const {activePath} = this.state;
		const {classes, Multiple} = this.props;

		return items.map((item, index) => {

			const {id, items, title} = item;
			const path = parentId !== undefined ? `${parentId}/${id}` : id;

			let open = false;
			(activePath && Multiple) ? activePath.forEach(active => { if (active.startsWith(path)) open = true }) : 
			(activePath && !Multiple) ? open = activePath.startsWith(path) : open = false;

			return (items && items.length) 
				? ( 
					<Category 
						key={id}
						title={title}
						classes={classes}
						open={open}
					>
						{this.renderNestedList(items, path)}
					</Category>
				) : (
					<MenuItem
						key={id}
						data-id={path}
						selected={open}
						onClick={e => this.handleMenuItemClick(e, path, { ...item, path })}
						classes={{
							root: classes.menuItemRoot,
							selected: classes.menuItemSelected
						}}
					>
						{title}
					</MenuItem>
				);

		})
	}

	render() {

		const {classes, options, label, onInput, Multiple} = this.props;
		const {anchorEl, open, activeItem, search} = this.state;

		const items = this.renderNestedList(options);
		const value = !Multiple && activeItem ? activeItem.title : 
			(Multiple && activeItem) ? activeItem.reduce((p,n) => p.length ? (p + ', ' + n.title) : p + n.title, '') : null;

		return (
			<div className={classes.root}>
				<List>
					<ListItem
						button
						aria-haspopup="true"
						aria-controls="lock-menu"
						aria-label={label}
						onClick={this.handleClickListItem}
						className={classes.visible}
					>
						<ListItemText
							primary={label}
							secondary={value}
						/>
						<ArrowDropDown className={classes.arrow} />
					</ListItem>
				</List>
				<Menu
					id="lock-menu"
					anchorEl={anchorEl}
					open={open}
					onRequestClose={this.handleRequestClose}
					classes={{
						paper: classes.dropdown
					}}
				>
					<SearchField 
						value={search}
						classes={classes} 
						onInput={e => {
							this.onSearchInput(e);
							onInput && onInput(e)
						}}
					/>
					{items}
				</Menu>
			</div>
		);

	}
	
};

export default withStyles(styles)(NestedSelect);