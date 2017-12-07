import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

import { colors } from '../constants';

import SelectList from './components/SelectList';
import InputField from './components/InputField';
import InputLabel from './components/InputLabel';

const styles = theme => ({
	sidebar: theme.sidebar,
	outer: {
		position: 'relative',
		paddingBottom: '91px',
		height: '100%'
	},
	inner: {
		overflow: 'auto',
		padding: '20px',
		height: '100%'
	},
	header: {
		paddingBottom: '30px'
	},
	footer: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 0,
		padding: '20px',
		textAlign: 'right'
	},

	formControl: theme.formControl,
	sidebarInfo: {
		padding: '10px 0',
		marginBottom: '20px'
	},
	sidebarInfoBox: {},
	sidebarInfoLabel: theme.inputLabel,
	sidebarInfoLabelIn: {
		paddingRight: '15px'
	},
	sidebarInfoValue: {
		display: 'inline-block',
		padding: '10px 0',
		fontSize: '16px',
		cursor: 'pointer'
	},

	value: theme.value,

	buttonGreen: theme.buttonGreen
});

class Sidebar extends Component {

	state = {
		carrier: '',
		scan: '',
		search: '',
		type: '',
		term: '',
		promo: ''
	}

	handleChange = event => this.setState({ [event.target.name]: event.target.value });
	
	render() {
		const { classes } = this.props;
		const { carrier, scan, search, type, term, promo } = this.state;

		return (
			<aside className={ classes.sidebar }>
				<form className={ classes.outer } autoComplete="off">
					<div className={ classes.inner }>
						<div className={ classes.header }>
							<FormControl className={ classes.formControl }>
								<InputLabel 
									htmlFor="carrier" 
									children="Carrier"
								/>
								<SelectList 
									value={ carrier }
									onChange={ this.handleChange }
									id="carrier"
									name="carrier"
									options={[
										{ id: 1, value: 'Carrier 1', children: 'Carrier 1' },
										{ id: 2, value: 'Carrier 2', children: 'Carrier 2' },
										{ id: 3, value: 'Carrier 3', children: 'Carrier 3' }
									]}
								/>
							</FormControl>
							<FormControl className={ classes.formControl }>
								<InputLabel 
									htmlFor="scan" 
									children="Scan Product"
								/>
								<InputField 
									value={ scan }
									name="scan" 
									id="scan" 
									onInput={ this.handleChange } 
								/>
							</FormControl>
							<FormControl className={ classes.formControl }>
								<InputLabel 
									htmlFor="search" 
									children="Or Search Product"
								/>
								<InputField 
									value={ search }
									name="search" 
									id="search" 
									onInput={ this.handleChange }  
								/>
								<div className={ classes.value }>6S 16G ROSE - $0.00</div>
							</FormControl>
						</div>
						<div className={ classes.body }>
							<FormControl className={ classes.formControl }>
								<InputLabel 
									htmlFor="type" 
									children="Contract Type"
								/>
								<SelectList 
									value={ type }
									onChange={ this.handleChange }
									id="type"
									name="type"
									options={[
										{ id: 1, value: 'Contract Type With Long-Long-Long-Long-Long name', children: 'Contract Type With Long-Long-Long-Long-Long name' },
										{ id: 2, value: 'Contract Type 2', children: 'Contract Type 2' },
										{ id: 3, value: 'Contract Type 3', children: 'Contract Type 3' }
									]}
								/>
							</FormControl>
							<FormControl className={ classes.formControl }>
								<InputLabel 
									htmlFor="term" 
									children="Term"
								/>
								<SelectList 
									value={ term }
									onChange={ this.handleChange }
									id="term"
									name="term"
									options={[
										{ id: 1, value: 'Term 1', children: 'Term 1' },
										{ id: 2, value: 'Term 2', children: 'Term 2' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' },
										{ id: 3, value: 'Term 3', children: 'Term 3' }
									]}
								/>
							</FormControl>
							<div className={ classes.sidebarInfo }>
								<div className={ classes.sidebarInfoBox }>
									<div className={ classes.sidebarInfoLabel }>
										<span className={ classes.sidebarInfoLabelIn }>Service Plan</span>
										<a className={ classes.sidebarInfoValue }>Default - UNL FAMILY PLAN 1 LINE PROMO ($50.00)</a>
									</div>
								</div>
								<div className={ classes.sidebarInfoBox }>
									<div className={ classes.sidebarInfoLabel }>
										<span className={ classes.sidebarInfoLabelIn }>Plan Options:</span>
										<a data-href="#" className={classes.sidebarInfoValue}>Select Plan Options</a>
									</div>
								</div>
							</div>
							<FormControl className={ classes.formControl }>
								<InputLabel 
									htmlFor="promo" 
									children="Promo"
								/>
								<SelectList 
									value={ promo }
									onChange={ this.handleChange }
									id="promo"
									name="promo"
									options={[
										{ id: 1, value: 'Promo 1', children: 'Promo 1' },
										{ id: 2, value: 'Promo 2', children: 'Promo 2' },
										{ id: 3, value: 'Promo 3', children: 'Promo 3' }
									]}
								/>
							</FormControl>
						</div>
					</div>
					<div className={ classes.footer }>
						<Button raised className={ classes.buttonGreen }>Add to Quote</Button>
					</div>
				</form>
			</aside>
		);

	}

};
export default withStyles(styles)(Sidebar);