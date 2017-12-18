import React, { Component } from 'react';

import Slide from 'material-ui/transitions/Slide';
import Dialog from 'material-ui/Dialog';

const duration = 600;

const Transition = props => <Slide 
	{...props}
	timeout={{
		enter: duration,
		exit: duration
	}}
	direction="left"
/>;

class Modal extends Component {

	render() {

		const {open, children} = this.props;

		return (
			<Dialog
				fullScreen
				open={open}
				transition={Transition}
			>
				{children}
			</Dialog>
		);

	}

}

export default Modal;
