import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './CSS/index.css';
import App from './Components/App';
import * as serviceWorker from './Components/serviceWorker';

ReactDOM.render(
	<BrowserRouter>
		<>
			<Route path='/' component={App} exact />
		</>
	</BrowserRouter>
	, document.getElementById('root')
);

serviceWorker.unregister();
