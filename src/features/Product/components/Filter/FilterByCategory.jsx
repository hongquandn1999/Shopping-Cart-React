import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import categoryApi from '../../../../api/categoryApi';

FilterByCategory.propTypes = {
	onChange: PropTypes.func,
};

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(2)
	},
	menu: {
		padding: 0,
		margin: 0,
		listStyle: 'none',
		transition: 'all .25s',
		'& > li': {
			marginTop: theme.spacing(1),
			'&:hover': {
				cursor: 'pointer',
				color: theme.palette.primary.main
			}
		}
	}
}))

function FilterByCategory({ onChange }) {
	const [categoryList, setCategoryList] = useState([]);
	const classes = useStyles();
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
		<Box className={classes.root}>
			<Typography>List Category</Typography>
			<ul className={classes.menu}>
				{categoryList.map((category) => (
					<li key={category.id} onClick={() => handleCategoryClick(category)}>
						<Typography variant='body2'>

							{category.name}
						</Typography>
					</li>
				))}
			</ul>
		</Box>
	);
}

export default FilterByCategory;
