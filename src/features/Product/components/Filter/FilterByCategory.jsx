import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
	onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
	const [categoryList, setCategoryList] = useState([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await categoryApi.getAll();
				// console.log({ response });
				setCategoryList(
					response.map((x) => ({
						id: x.id,
						name: x.name,
					}))
				);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const handleCategoryClick = (category) => {
		if (onChange) {
			onChange(category.id);
		}
	};
	return (
		<Box>
			<Typography>List Category</Typography>
			<ul>
				{categoryList.map((category) => (
					<li key={category.id} onClick={() => handleCategoryClick(category)}>
						{category.name}
					</li>
				))}
			</ul>
		</Box>
	);
}

export default FilterByCategory;
