import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// THEMES
import { StylesProvider } from '@material-ui/core/styles';

// USER DEFINED
import Website from "./Components/Website";
import { UtilityStyles } from './Styles/Utils'
import { store } from "./Redux/Store";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter basename={process.env.REACT_APP_BASE_PATH}>
				<StylesProvider injectFirst>
						<Website />
						<UtilityStyles />
				</StylesProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
