import React from 'react';
import Table, { TableCell, TableRow, TableBody } from 'material-ui/Table';
import Input from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Close from 'material-ui-icons/Close';
import ModeEdit from 'material-ui-icons/ModeEdit';

import { withStyles } from 'material-ui/styles';

import { mergeStyles } from '../../../utils';
import { colors } from '../../../constants';

const styles = theme => {
	const info = {
		display: 'block',
		padding: '7px 0',
		fontSize: '14px',
		lineHeight: '1.2',
		wordBreak: 'break-word'
	};
	return {
		infoLeft: mergeStyles(info, {
			textAlign: 'left'
		}),
		infoCenter: mergeStyles(info, {
			textAlign: 'center'
		}),

		input: {
			padding: '7px 30px 7px 0',
			boxSizing: 'border-box',
			height: '33px',
			fontSize: '14px',
			lineHeight: 'normal',
			textAlign: 'center'
		},
		inputRoot:  mergeStyles(theme.input, {
			'&:before': {
				display: 'none'
			}
		}),

		editable: {
			position: 'relative'
		},
		editableIcon: {
			position: 'absolute',
			top: 0,
			right: 0,
			color: '#aaa',
			pointerEvents: 'none'
		},

		close: {
			color: colors.red
		}
	}
};

const Product = props => {

	const {classList, classes, items, onDelete, currencySymbol, itemId} = props;

	const product = items.map((item, i) => {

		const {id, upc, description, retailPrice, quantity, discount, extendedPrice} = item;

		return (
			<TableRow 
				key={id}
				className={classList.row}
			>
				<TableCell className={classList.body[0]}>
					{ 
						i === 0 
							? <IconButton 
								aria-label="Delete"
								className={classes.close}
								onClick={e => {
									e.preventDefault();
									onDelete(itemId);
								}}
							>
								<Close />
							</IconButton>
							: null
					}
				</TableCell>
				<TableCell className={classList.body[1]}>
					<span className={classes.infoLeft}>{upc}</span>
				</TableCell>
				<TableCell className={classList.body[2]}>
					<span className={classes.infoLeft}>{description}</span>
				</TableCell>
				<TableCell className={classList.body[3]}>
					<div className={classes.editable}>
						<Input 
							type="text"
							value={currencySymbol + retailPrice}
							name="retailPrice"
							classes={{
								input: classes.input,
								root: classes.inputRoot
							}}
							fullWidth={true}
						/>
						<ModeEdit className={classes.editableIcon} />
					</div>
				</TableCell>
				<TableCell className={classList.body[4]}>
					<div className={classes.editable}>
						<Input 
							type="text"
							value={quantity}
							name="quantity"
							classes={{
								input: classes.input,
								root: classes.inputRoot
							}}
							fullWidth={true}
						/>
						<ModeEdit className={classes.editableIcon} />
					</div>
				</TableCell>
				<TableCell className={classList.body[5]}>
					<span className={classes.infoCenter}>{(discount > 0 ? `(${currencySymbol + discount})` : currencySymbol + discount)}</span>
				</TableCell>
				<TableCell className={classList.body[6]}>
					<span className={classes.infoCenter }>{currencySymbol + extendedPrice}</span>
				</TableCell>
			</TableRow>
		);
	});

	return (
		<Table className={classList.inner}>
			<TableBody>
				{product}
			</TableBody>
		</Table>
	);
};

export default withStyles(styles)(Product);