import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FilterByCategory from './Filter/FilterByCategory';
import FilterByPrice from './Filter/FilterByPrice';
import FilterByService from './Filter/FilterByService';

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

	const handleChange = (values) => {
		console.log(values);
		if (onChange) {
			onChange(values);
		}
	};

	return (
		<Box>
			<FilterByCategory onChange={handleCategoryChange} />
			<FilterByPrice onChange={handleChange} />
			<FilterByService filters={filters} onChange={handleChange} />
		</Box>
	);
}

export default ProductFilter;
