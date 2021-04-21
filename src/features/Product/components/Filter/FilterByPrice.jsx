import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

FilterByPrice.propTypes = {
	onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		borderTop: `1px solid ${theme.palette.grey}`
	},

	range: {
		display: 'flex',
		flexFlow: 'row nowrap',
		alignItems: 'center',

		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),

		'& > span': {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1)
		},

		
	},
	btn: {
		marginRight: theme.spacing(1)
		
	}
}))

function FilterByPrice({onChange}) {
	const classes = useStyles();
	const [values, setValues] = useState({
		salePrice_gte: 0,
		salePrice_lte: 0,
	})

	const handleChange = (event) => {
		const {name, value} = event.target
		setValues(preValue => ({
			...preValue,
			[name]: value,
		}))
	}
	const handleSubmit = () => {
		if(onChange) onChange(values)
		setValues({
			salePrice_gte: 0,
			salePrice_lte: 0,	
		})
	}

	const handleReset = () => {
		setValues({
			salePrice_gte: 0,
			salePrice_lte: 0,	
		})
	}
	return (
		<Box className={classes.root}>
			<Typography variant='subtitle2'>Price</Typography>
			<Box className={classes.range}>
				<TextField name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange}/>
				<span>-</span>
				<TextField name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange}/>
			</Box>
			<Button variant="outlined" size="small" color="primary" onClick={handleSubmit}>Apply</Button>
			<Button className={classes.btn} variant="outlined" size="small" color="primary" onClick={handleReset}>Reset</Button>
		</Box>
	);
}

export default FilterByPrice;
