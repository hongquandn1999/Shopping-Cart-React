import {
	Box,
	Container,
	Grid,
	makeStyles,
	Paper,
	Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

const useStyles = makeStyles((theme) => ({
	root: {},

	left: {
		width: '250px',
	},

	right: {
		flex: '1 1 0',
	},
}));

function ListPage(props) {
	const classes = useStyles();
	const [productList, setProductList] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
				setProductList(data);
				console.log(data);
			} catch (error) {
				console.log(error);
			}

			setLoading(false);
		})();
	}, []);
	return (
		<Box>
			<Container>
				<Grid container spacing={2}>
					<Grid item className={classes.left}>
						<Paper elevation={0}>Left Col</Paper>
					</Grid>
					<Grid item className={classes.right}>
						<Paper elevation={0}>
							{loading ? (
								<ProductSkeletonList length={8} />
							) : (
								<ProductList data={productList} />
							)}
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default ListPage;
