import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filter/FilterByCategory';
import FilterByPrice from './Filter/FilterByPrice';

ProductFilter.propTypes = {
	filters: PropTypes.object.isRequired,
	onChange: PropTypes.func,
};

function ProductFilter({ filters, onChange }) {
	const handleCategoryChange = (newCategoryId) => {
		if (!onChange) return;
		const newFilters = {
			'category.id': newCategoryId,
		};

		onChange(newFilters);
	};

	const handlePriceChange = (values) => {
		console.log(values);
		if (onChange) {
			onChange(values);
		}
	};

	return (
		<Box>
			<FilterByCategory onChange={handleCategoryChange} />
			<FilterByPrice onChange={handlePriceChange} />
		</Box>
	);
}

export default ProductFilter;
