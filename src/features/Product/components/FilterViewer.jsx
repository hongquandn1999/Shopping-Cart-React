import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',

		padding: 0,
		margin: theme.spacing(2, 0),
		listStyleType: 'none',

		'& > li': {
			margin: 0,
			padding: theme.spacing(1),
		},
	},
}));

const FILTER_LIST = [
	{
		id: 1,
		getLabel: () => 'Free Ship',
		isActive: (filters) => filters.isFreeShip,
		isVisible: () => true,
		isRemovable: false,
		onRemove: () => {},
		onToggle: (filters) => {
			const newFilters = { ...filters };
			if (newFilters.isFreeShip) {
				delete newFilters.isFreeShip;
			} else {
				newFilters.isFreeShip = true;
			}
			return newFilters;
		},
	},
	{
		id: 2,
		getLabel: () => 'Have Discount',
		isActive: () => true,
		isVisible: (filters) => filters.isPromotion,
		isRemovable: true,
		onRemove: (filters) => {
			const newFilters = { ...filters };
			delete newFilters.isPromotion;
			return newFilters;
		},
		onToggle: () => {},
	},
	{
		id: 3,
		getLabel: (filters) =>
			`From ${filters.salePrice_gte} to ${filters.salePrice_lte}`,
		isActive: () => true,
		isVisible: (filters) =>
			Object.keys(filters).includes('salePrice_lte') &&
			Object.keys(filters).includes('salePrice_gte'),
		isRemovable: true,
		onRemove: (filters) => {
			const newFilters = { ...filters };
			delete newFilters.salePrice_gte;
			delete newFilters.salePrice_lte;
			return newFilters;
		},
		onToggle: () => {},
	},
	// {
	// 	id: 4,
	// 	getLabel: (filters) => 'Danh muc',
	// 	isActive: () => true,
	// 	isVisible: (filters) => true,
	// 	isRemovable: (filters) => true,
	// 	onRemove: (filters) => {},
	// 	onToggle: (filters) => {},
	// },
];

FilterViewer.propTypes = {
	filters: PropTypes.object,
	onChange: PropTypes.func,
};

function FilterViewer({ filters = {}, onChange = null }) {
	const classes = useStyles();

	// use useMemo improve performance when page reload if object have in memo no change => component no rerender
	const visibleFilter = useMemo(() => {
		return FILTER_LIST.filter((x) => x.isVisible(filters));
	}, [filters]);;

	return (
		<Box component='ul' className={classes.root}>
			{visibleFilter.map((x) => (
				<li key={x.id}>
					<Chip
						label={x.getLabel(filters)}
						color={x.isActive(filters) ? 'primary' : 'default'}
						clickable={!x.isRemovable}
						onClick={
							x.isRemovable
								? null
								: () => {
										if (!onChange) return;
										const newFilter = x.onToggle(filters);
										onChange(newFilter);
								  }
						}
						onDelete={
							x.isRemovable
								? () => {
										if (!onChange) return;
										const newFilter = x.onRemove(filters);
										onChange(newFilter);
								  }
								: null
						}
					/>
				</li>
			))}
		</Box>
	);
}

export default FilterViewer;
