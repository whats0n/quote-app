import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';

//themes
import themes from '../themes';

import Main from './Main';
import Modal from './Modal';
import ServicePlan from './ServicePlan/';
import PlanOptions from './PlanOptions';
import DeleteItem from './DeleteItem';

import { modal } from '../constants';


class App extends Component {

	state = {
		openedModal: '',
		servicePlan: {
			top: [
				{ id: 1, group: 'Default', name: '2GB TABLET PLAN FAM', mrc: '$10.00' },
				{ id: 2, group: 'Default', name: '2GB TABLET PLAN FAM', mrc: '$10.00' },
				{ id: 3, group: 'Default', name: '2GB TABLET PLAN', mrc: '$15.00' },
				{ id: 4, group: 'Default', name: '2GB TABLET PLAN', mrc: '$15.00' },
				{ id: 5, group: 'Default', name: '2GB TABLET PLAN FAM', mrc: '$20.00' }
			],
			other: [
				{ id: 1, group: 'Default', name: '1GB TALK TEXT DATA', mrc: '$30.00' },
				{ id: 2, group: 'Default', name: '2GB Promo Plan', mrc: '$30.00' },
				{ id: 3, group: 'Default', name: '2GB TALK TEXT DATA', mrc: '$30.00' },
				{ id: 4, group: 'Default', name: '2GB TALK TEXT DATA FAM', mrc: '$25.00' },
				{ id: 5, group: 'Default', name: '5GB Promo Plan', mrc: '$30.00' },
				{ id: 6, group: 'Default', name: '6GB TABLET PLAN FAM', mrc: '$30.00' },
				{ id: 7, group: 'Default', name: '8GB TABLET PLAN FAM', mrc: '$30.00' },
				{ id: 8, group: 'Default', name: 'Default 2GB Promo Plan', mrc: '$30.00' },
				{ id: 9, group: 'Default', name: 'UNL w/o Hotspot Promo', mrc: '$30.00' },
				{ id: 10, group: 'Default', name: 'Unlimited w/Hotspot Promo', mrc: '$30.00' },
				{ id: 11, group: 'Default', name: '6GB TABLET PLAN', mrc: '$35.00' },
				{ id: 12, group: 'Default', name: '8GB TABLET PLAN', mrc: '$35.00' },
				{ id: 13, group: 'Default', name: '5GB Promo Plan', mrc: '$40.00' },
				{ id: 14, group: 'Default', name: '6GB DEFAULT FAMILY PROMO', mrc: '$25.00' },
				{ id: 15, group: 'Default', name: '6GB FAMILY PROMO', mrc: '$40.00' }
			],
			selected: null
		},
		planOptions: {
			checked: {},
			items: [
				{ id: 1, name: '2GB 4G LTE Data Speed', mrc: '$0.00' },
				{ id: 2, name: 'Anytime Minutes', mrc: '$0.00' },
				{ id: 3, name: 'BYOD', mrc: '$0.00' },
				{ id: 4, name: 'Call Detail', mrc: '$1.00' },
				{ id: 5, name: 'Call Waiting', mrc: '$0.00' },
				{ id: 6, name: 'Caller ID', mrc: '$0.00' },
				{ id: 7, name: 'Caller ID Block', mrc: '$0.00' },
				{ id: 8, name: 'CollerTunes Ringback Tones Pkg', mrc: '$5.00' },
				{ id: 9, name: 'Domestic Long Distance', mrc: '$0.00' },
				{ id: 10, name: 'HD Video', mrc: '$10.00' },
				{ id: 11, name: 'International Text Messaging', mrc: '$5.00' },
				{ id: 12, name: 'joyn By MetroPCS', mrc: '$0.00' },
				{ id: 13, name: 'Lookout Mobile Security', mrc: '$3.00' },
				{ id: 14, name: 'MetroWEB', mrc: '$0.00' },
				{ id: 15, name: 'Mexico and Canada Unl Free', mrc: '$0.00' }
			],
			selected: []
		},
		currencySymbol: '$',
		items: [
			{
				id: 1,
				items: [
					{
						id: 1,
						upc: '1234234523456',
						description: 'Sumsung Note 8',
						retailPrice: '500.00',
						quantity: '1',
						discount: '10.00',
						extendedPrice: '490.00'
					},
					{
						id: 2,
						upc: '',
						description: 'Payment',
						retailPrice: '26.00',
						quantity: '1',
						discount: '0.00',
						extendedPrice: '26.00'
					}
				]
				
			},
			{
				id: 2,
				items: [
					{
						id: 1,
						upc: '1239991',
						description: 'Iphone 12S ExtraGold',
						retailPrice: '1500.00',
						quantity: '1',
						discount: '0.00',
						extendedPrice: '490.00'
					},
					{
						id: 2,
						upc: '',
						description: 'Payment',
						retailPrice: '26.22',
						quantity: '1',
						discount: '0.00',
						extendedPrice: '26.00'
					}
				]
				
			},
			
		],
		itemToDelete: null,
		
		totals: {
			subtotal: 0,
			discount: 0,
			tax: 0,
			total: 0
		}
	}

	toggleModalOnClick = event => {
		if (!event.target.dataset && !event.target.dataset.length) return;
		this.toggleModal(event.target.dataset.modal);
	}

	toggleModal = modal => {
		const opened = this.state.openedModal;
		const state = opened === modal ? '' : modal;
		this.setState({
			openedModal: state
		});
	}

	updateTotals = (items) => {
		const {formatAmount} = this;
		let subtotal = 0;
		let discount = 0;
		let tax = 0;
		let total = 0;

		items.forEach(item => {
			item.items.forEach(item => {
				subtotal += +item.retailPrice;
				discount += +item.discount;
			});
		});

		total = subtotal - discount + tax;

		this.setState({
			totals: {
				subtotal: formatAmount(subtotal),
				discount: formatAmount(discount),
				tax: formatAmount(tax),
				total: formatAmount(total)
			}
		});
	}

	formatAmount(amount) {
		let n = amount.toFixed(2)*100;
		n = Math.ceil(n)/100;
		n = n.toFixed(2);
		return n;
	}

	componentDidMount() {
		this.updateTotals(this.state.items);
	}

	render() {
	
		const {openedModal, servicePlan, planOptions, items, totals, itemToDelete, currencySymbol} = this.state;

		return (
			<MuiThemeProvider theme={themes['ehopper']}>
				<Main 
					servicePlan={servicePlan.selected}
					planOptions={planOptions.selected}
					toggleModalOnClick={this.toggleModalOnClick}

					items={items}
					totals={totals}
					currencySymbol={currencySymbol}
					onDelete={id => {
						this.toggleModal(modal.deleteItem);
						this.setState({itemToDelete: id})
					}}
				/>
				<Modal open={openedModal === modal.servicePlan}>
					<ServicePlan 
						onRowClick={data => {
							this.setState({servicePlan: {...servicePlan, selected: data}});
							this.toggleModal(modal.servicePlan);
						}}
						items={servicePlan}
					/>
				</Modal>
				<Modal open={openedModal === modal.planOptions}>
					<PlanOptions 
						checked={planOptions.checked}
						onSubmit={data => {
							const {items, checked} = planOptions;
							const selected = items.filter(item => data[item.id]);

							this.setState({
								planOptions: {
									checked: {...checked, ...data},
									selected: selected,
									items: [...items]
								}
							});
							this.toggleModal(modal.planOptions);
						}}
						items={planOptions.items}
					/>
				</Modal>
				<DeleteItem 
					open={openedModal === modal.deleteItem} 
					onCancel={() => {
						this.setState({itemToDelete: null});
						this.toggleModal(modal.deleteItem);
					}}
					onSubmit={() => {
						const newItems = items.filter(item => item.id !== itemToDelete);
						this.setState({ 
							items: newItems,
							itemToDelete: null
						});
						this.updateTotals(newItems);
						this.toggleModal(modal.deleteItem);
					}}
				/>
			</MuiThemeProvider>
		);
	}
}

export default App;
