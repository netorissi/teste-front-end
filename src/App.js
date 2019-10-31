import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';

// ## --------- ROUTES --------- ## //
import Routes from './routes/constructor';

const App = () => {
	if (window) window.scrollTo(0, 0);

	return (
		<Fragment>
			<CssBaseline />
			<Routes />
		</Fragment>
	)
}

export default App;
