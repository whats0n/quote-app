import React from 'react';
import { TableCell, TableHead, TableRow } from 'material-ui/Table';

const Head = props => {

	const {headers, classList} = props;
	
	const header = headers.map((item, i) => (
		<TableCell 
			key={item.id} 
			children={item.title ? item.title : null} 
			className={classList.headers[i]}
		/>
	));

	return (
		<TableHead>
			<TableRow className={classList.row}>
				{header}
			</TableRow>
		</TableHead>
	);

};

export default Head;
