import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterComponent } from './components/routes/RouterComponent';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot (
	document.getElementById ( 'root' ) as HTMLElement
);
root.render (
	<React.StrictMode>
		<BrowserRouter>
			<RouterComponent/>
		</BrowserRouter>
	</React.StrictMode>
);
