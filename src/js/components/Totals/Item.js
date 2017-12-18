import React from 'react';

const Item = props => {
	
	const {classes, label, value, result} = props;
	const fields = {
		label: <span className={classes.label} children={label}/>,
		value: <span className={classes.value} children={value}/>
	};
	
	return result ? (<li className={classes.result}>{fields.label}: {fields.value}</li>): <li>{fields.label}: {fields.value}</li>;

};

export default Item;