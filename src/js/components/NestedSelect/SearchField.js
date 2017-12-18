import React, { Component } from 'react';
import { FormControl } from 'material-ui/Form';
import InputField from '../InputField';
import InputLabel from '../InputLabel';
import Search from 'material-ui-icons/Search';

class SearchField extends Component {

	render() {
		const {classes, onInput, value} = this.props;

		return (
			<li className={classes.search}>
				<FormControl className={classes.formControl}>
					<InputLabel 
						htmlFor="categories-search" 
						children="Search"
					/>
					<InputField 
						value={value}
						name="search" 
						id="categories-search" 
						onInput={onInput} 
						className={classes.searchInput}
					/>
					<Search className={classes.searchIcon}/>
				</FormControl>
			</li>
		);
	}

};

export default SearchField;