import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {},

	left: {
		width: '250px',
	},

	right: {
		flex: '1 1 auto',
	},
}));

function ListPage(props) {
	const classes = useStyles();
	return (
		<Box>
			<Container>
				<Grid container spacing={2}>
					<Grid item className={classes.left}>
						<Paper elevation={0}>Left Col</Paper>
					</Grid>
					<Grid item className={classes.right}>
						<Paper elevation={0}>Right Col</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default ListPage;
