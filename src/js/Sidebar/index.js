import React, { Component } from 'react';

import { withStyles } from 'material-ui/styles';
import { FormControl, FormControlLabel } from 'material-ui/Form';

import SelectList from '../components/SelectList';
import InputField from '../components/InputField';
import InputLabel from '../components/InputLabel';
import CheckboxField from '../components/CheckboxField';
import NestedSelect from '../components/NestedSelect/';

import ModalControl from './ModalControl';
import Footer from './Footer';

import { modal } from '../../constants';

const styles = theme => ({
	root: theme.sidebar,
	outer: theme.outer,
	inner: theme.inner,
	box: {
		paddingBottom: '30px'
	},

	formControl: theme.formControl,

	value: theme.value,

	checkboxLabel: {
		fontSize: '16px'
	}
});

class Sidebar extends Component {

	state = {
		carrier: '',
		scan: '',
		search: '',
		type: '',
		term: '',
		promo: [],
		withPayment: null,
		payment: false
	}

	handleChange = event => this.setState({ [event.target.name]: event.target.value });
	
	render() {
		const {classes, toggleModalOnClick, servicePlan, planOptions} = this.props;
		const {carrier, scan, search, type, term, promo, withPayment, payment} = this.state;

		const selectedServicePlan = (servicePlan) ? `${ servicePlan.group } - ${servicePlan.name} (${servicePlan.mrc})` : 'Select Service Plan';
		const selectedPlanOptions = (planOptions && planOptions.length) 
			? planOptions
				.map(item => `${item.name} ${item.mrc}`)
				.join(', ') 
			: 'Select Plan Options';

		return (
			<aside className={classes.root}>
				<form className={classes.outer} autoComplete="off">
					<div className={classes.inner}>
						<div className={classes.box}>
							<FormControl className={classes.formControl}>
								<InputLabel 
									htmlFor="carrier" 
									children="Carrier"
								/>
								<SelectList 
									value={carrier}
									onChange={this.handleChange}
									id="carrier"
									name="carrier"
									options={[
										{ id: 1, value: 'Carrier 1', children: 'Carrier 1' },
										{ id: 2, value: 'Carrier 2', children: 'Carrier 2' },
										{ id: 3, value: 'Carrier 3', children: 'Carrier 3' }
									]}
								/>
							</FormControl>
							<FormControl className={classes.formControl}>
								<InputLabel 
									htmlFor="scan" 
									children="Scan Product"
								/>
								<InputField 
									value={scan}
									name="scan" 
									id="scan" 
									onInput={this.handleChange}
								/>
							</FormControl>
							<FormControl className={classes.formControl}>
								<NestedSelect 
									Multiple
									label="Or Search Product"
									options={[
										{
											id: 1, title: 'Category 1', items: [
												{ id: 1, title: 'Product item 1.1' },
												{ id: 2, title: 'Product item 1.2' },
												{ id: 3, title: 'Product item 1.3' },
												{ id: 4, title: 'Product item 1.4' }
											]
										},
										{
											id: 2, title: 'Category 2', items: [
												{ id: 1, title: 'Product item 2.1' },
												{ id: 2, title: 'Product item 2.2' },
												{ id: 3, title: 'Product item 2.3' },
												{ id: 4, title: 'Subcategory', items: [
													{ id: 1, title: 'Product item 2.4.1' },
													{ id: 2, title: 'Product item 2.4.2' },
													{ id: 3, title: 'Product item 2.4.3' },
												] }
											]
										},
										{
											id: 3, title: 'Category 3', items: [
												{ id: 1, title: 'Product item 3.1' },
												{ id: 2, title: 'Product item 3.2' },
												{ id: 3, title: 'Product item 3.3' },
												{ id: 4, title: 'Product item 3.4' }
											]
										},
										{
											id: 4, title: 'Category 4', items: [
												{ id: 1, title: 'Product item 4.1' },
												{ id: 2, title: 'Product item 4.2' },
												{ id: 3, title: 'Product item 4.3' },
												{ id: 4, title: 'Product item 4.4' }
											]
										},
										{
											id: 5, title: 'Category 5', items: [
												{ id: 1, title: 'Product item 5.1' },
												{ id: 2, title: 'Product item 5.2' },
												{ id: 3, title: 'Product item 5.3' },
												{ id: 4, title: 'Product item 5.4' }
											]
										}
									]}
								/>
								<div className={classes.value}>6S 16G ROSE - $0.00</div>
							</FormControl>
						</div>
						<div className={classes.box}>
							<FormControl className={classes.formControl}>
								<InputLabel 
									htmlFor="type" 
									children="Contract Type"
								/>
								<SelectList 
									value={type}
									onChange={e => {
										this.setState({ withPayment: true });
										this.handleChange(e);
									}}
									id="type"
									name="type"
									options={[
										{ id: 1, value: 'Contract Type With Long-Long-Long-Long-Long name', children: 'Contract Type With Long-Long-Long-Long-Long name' },
										{ id: 2, value: 'Contract Type 2', children: 'Contract Type 2' },
										{ id: 3, value: 'Contract Type 3', children: 'Contract Type 3' }
									]}
								/>
							</FormControl>
							{ 
								withPayment 
									? <FormControlLabel
										control={
											<CheckboxField
												checked={payment}
												onChange={e => this.setState({ payment: !payment })}
												value="payemnt"
											/>
										}
										label="Payment"
										classes={{
											label: classes.checkboxLabel
										}}
									/>
									: null
							}
							<FormControl className={classes.formControl}>
								<InputLabel 
									htmlFor="term" 
									children="Term"
								/>
								<SelectList 
									value={term}
									onChange={this.handleChange}
									id="term"
									name="term"
									options={[
										{ id: 1, value: 'Term 1', children: 'Term 1' },
										{ id: 2, value: 'Term 2', children: 'Term 2' },
										{ id: 3, value: 'Term 3', children: 'Term 3' }
									]}
								/>
							</FormControl>
						</div>
						<div className={classes.box}>
							<ModalControl 
								modal={modal.servicePlan}
								onClick={toggleModalOnClick}
								label="Service Plan"
								value={selectedServicePlan}
							/>
							<ModalControl 
								modal={modal.planOptions}
								onClick={toggleModalOnClick}
								label="Plan Options"
								value={selectedPlanOptions}
							/>
						</div>
						<div className={classes.box}>
							<FormControl className={classes.formControl}>
								<InputLabel 
									htmlFor="promo" 
									children="Promo"
								/>
								<SelectList 
									multiple
									value={promo}
									onChange={this.handleChange}
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
					<Footer />
				</form>
			</aside>
		);

	}

};
export default withStyles(styles)(Sidebar);