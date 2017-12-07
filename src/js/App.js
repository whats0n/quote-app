import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { withStyles } from 'material-ui/styles';
//themes
import themes from '../themes';

import Main from './Main';


class App extends Component {
	render() {
		return (
			<MuiThemeProvider theme={themes['ehopper']}>
				<Main />
			</MuiThemeProvider>
		);
	}
}

export default App;
