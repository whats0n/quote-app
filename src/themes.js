import { createMuiTheme } from 'material-ui/styles';
import { colors } from './constants';

const buildTheme = props => {

	const common = {
		//containers
		main: {
			width: '100%',
			height: '100vh'
		},
		content: {
			position: 'relative',
			overflow: 'auto',
			// padding: '20px',
			height: '100%'
		},
		sidebar: {
			position: 'relative',
			float: 'left',
			boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
			width: '300px',
			height: '100%'
		},
		header: {
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			padding: '20px'
		},
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
		footer: {
			position: 'absolute',
			left: 0,
			right: 0,
			bottom: 0,
			padding: '20px',
			textAlign: 'right'
		},

		formControl: {
			marginBottom: '20px',
			width: '100%',
			'&:last-child': {
				marginBottom: 0
			}
		},

		//text
		inputLabel: {
			fontSize: '16px',
			fontWeight: '500'
		},
		value: {
			color: colors.darkGray,
			fontSize: '18px',
			fontWeight: '500'
		},
		titleLG: {
			fontSize: '24px',
			fontWeight: 500,
			lineHeight: '1.2'
		},
		//controls
		button: {
			padding: '17px 30px',
			fontSize: '16px',
			lineHeight: 1,
			//green
			'&[data-color="green"]': {
				color: colors.white,
				background: colors.green
			},
			'&[data-color="green"]:hover, &[data-color="green"]:focus': {
				color: colors.white,
				background: colors.darkGreen
			},
			//red
			'&[data-color="red"]': {
				color: colors.white,
				background: colors.red
			},
			'&[data-color="red"]:hover, &[data-color="red"]:focus': {
				color: colors.white,
				background: colors.darkRed
			}
		},
		
		checkboxDefault: {
			color: colors.darkGray
		},

	};

	for (let key in props) {
		if (!common[key]) common[key] = {};
		Object.assign(common[key], props[key]);
	}

	return createMuiTheme(common);
};

export default {
	
	ehopper: buildTheme({
		content: {
		},
		sidebar: {
		},
		header: {
			color: colors.white,
			background: colors.blue
		},

		//label
		inputLabel: {
			color: colors.gray
		},
		inputLabelFocused: {
			color: colors.blue
		},

		//input
		input: {
			'&:after': {
				background: colors.blue,
			},
		},

		//select
		select: {
			'&:after': {
				background: colors.blue,
			},
		},
		menuItem: {
		},
		menuItemSelected: {
			color: colors.white,
			background: colors.blue,
			'&:hover': {
				background: colors.darkBlue
			},
			'&:focus': {
				background: colors.darkBlue
			}
		},
		//button
		button: {
			'&[data-color="primary"]': {
				color: colors.white,
				background: colors.blue
			},
			'&[data-color="primary"]:hover, &[data-color="primary"]:focus': {
				color: colors.white,
				background: colors.darkBlue
			}
		},
		checkboxChecked: {
			color: colors.blue
		},

		link: {
			color: colors.blue
		},

		//content tablebox
		th: {
			color: colors.white,
			background: colors.blue
		}
	}),
	boost: buildTheme({
		content: {
		},
		sidebar: {
		}
	})

};