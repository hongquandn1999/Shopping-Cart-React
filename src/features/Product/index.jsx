import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
	const match = useRouteMatch();
	return (
		<div>
			<p>Product Features</p>
			<Switch>
				<Route path={match.url} exact component={ListPage} />
			</Switch>
		</div>
	);
}

export default ProductFeature;
