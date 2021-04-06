import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Redirect, Route, Switch } from 'react-router';
import ProductFeature from './features/Product';
import NotFound from './components/NotFound';

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
