import React from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

const Item = props => {
	const {classes, id, group, name, mrc, onRowClick} = props;

	return (
		<TableRow 
			key={id}
			className={classes.row}
			onClick={() => onRowClick({group: group, name: name, mrc: mrc})}
		>
			<TableCell className={classes.cell}>{group}</TableCell>
			<TableCell className={classes.cell}>{name}</TableCell>
			<TableCell className={classes.cell}>{mrc}</TableCell>
		</TableRow>
	);
};

export default Item;