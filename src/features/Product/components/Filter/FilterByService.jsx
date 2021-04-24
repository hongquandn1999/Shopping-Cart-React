import {
	Box,
	Checkbox,
	FormControlLabel,
	makeStyles,
	Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

FilterByService.propTypes = {
	onChange: PropTypes.func,
	filters: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		borderTop: `1px solid ${theme.palette.grey}`,
	},

	list: {
		margin: 0,
		padding: 0,
		listStyleType: 'none',

		'& > li': {
			margin: 0,
		},
	},
}));

function FilterByService({ onChange, filters = {} }) {
	const classes = useStyles();
	console.log(filters);

	const handleChange = (event) => {
		if (!onChange) return;
		const { name, checked } = event.target;
		onChange({ [name]: checked });
	};

	return (
		<Box className={classes.root}>
			<Typography variant='subtitle2'>Services</Typography>

			<ul className={classes.list}>
				{[
					{ value: 'isPromotion', label: 'Have Discount' },
					{ value: 'isFreeShip', label: 'FreeShip' },
				].map((service) => (
					<li key={service.value}>
						<FormControlLabel
							control={
								<Checkbox
									checked={Boolean(filters[service.value])}
									onChange={handleChange}
									name={service.value}
									color='primary'
								/>
							}
							label={service.label}
						/>
					</li>
				))}
			</ul>
		</Box>
	);
}

export default FilterByService;
