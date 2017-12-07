import { createMuiTheme } from 'material-ui/styles';
import { colors } from './constants';

const buildTheme = props => {

	const common = {
		//containers
		main: {
			width: '100%',
			height: '100vh'
		},
		container: {
			position: 'relative',
			overflow: 'auto',
			padding: '20px 20px 20px 320px',
			height: '100%'
		},
		sidebar: {
			position: 'relative',
			float: 'left',
			// borderRight: `1px solid ${colors.lightGray}`,
			boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
			width: '300px',
			height: '100%'
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
			paddingTop: '10px',
			color: colors.darkGray,
			fontSize: '18px',
			fontWeight: '500'
		},
		//controls
		buttonGreen: {
			padding: '17px 30px',
			color: colors.white,
			background: colors.green,
			fontSize: '16px',
			lineHeight: 1,
			'&:hover': {
				background: colors.darkGreen
			},
			'&:focused': {
				background: colors.darkGreen
			}
		}
	};

	for (let key in props) {
		if (!common[key]) common[key] = {};
		Object.assign(common[key], props[key]);
	}

	return createMuiTheme(common);
};

export default {
	
	ehopper: buildTheme({
		container: {
		},
		sidebar: {
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
	}),
	boost: buildTheme({
		container: {
		},
		sidebar: {
		}
	})

};