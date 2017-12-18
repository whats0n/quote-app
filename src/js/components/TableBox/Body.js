import React from 'react';
import { TableBody, TableRow, TableCell } from 'material-ui/Table';

import Product from './Product';

const Body = props => {
	
	const {classList, items, onDelete, currencySymbol} = props;
	const products = items.map((item, i) => {
		const {id, ...other} = item;
		return (
			<TableRow 
				key={id}
				className={classList.row}
			>
				<TableCell 
					colSpan={classList.body.length}
					className={classList.outer}
				>
					<Product 
						{...other}
						itemId={id}
						currencySymbol={currencySymbol}
						close={i === 0}
						onDelete={onDelete}
						classList={classList} 
					/>
				</TableCell>
			</TableRow>
		);
	});

	return (
		<TableBody>
			{products}
		</TableBody>
	);

};

export default Body;