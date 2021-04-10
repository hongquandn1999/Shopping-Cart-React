import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ProductFeature from './features/Product';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Redirect from='/products' to='/' component={ProductFeature} />
				<Route path='/' component={ProductFeature} />

				<Route component={NotFound} />
			</Switch>
		</div>
	);
}

export default App;
